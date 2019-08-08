using System.Collections.Generic;
using System.Linq;
using HealthCatalystPeople.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace HealthCatalystPeople.Data.Repositories {
    public class PeopleRepository : IPeopleRepository
    {
        private readonly IInterestsRepository _interestsRepository;
        private readonly IPersonInterestsRepository _personInterestsRepository;
        private readonly IOccupationsRepository _occupationsRepository;
        private readonly IAddressRepository _addressRepository;
        
        public PeopleRepository(
            IInterestsRepository interestsRepository,
            IPersonInterestsRepository personInterestsRepository,
            IOccupationsRepository occupationsRepository,
            IAddressRepository addressRepository
        ) {
            _interestsRepository = interestsRepository;
            _personInterestsRepository = personInterestsRepository;
            _occupationsRepository = occupationsRepository;
            _addressRepository = addressRepository;
        }
        
        public Person GetPersonById(int id)
        {
            using (var db = ContextFactory.GetContext()) {
                return db.People.Where(p => p.Id == id)
                    .Include(p => p.PersonInterests)
                        .ThenInclude(pi => pi.Interest)
                    .AsEnumerable()
                    .Select(p => {
                        p.Interests = p.PersonInterests.Select(pi => pi.Interest).ToList();
                        p.Occupation = db.Occupations.Find(p.OccupationId);
                        p.Address = db.Addresses.Find(p.AddressId);
                        return p;
                    })
                    .FirstOrDefault();
            }
        }

        public IEnumerable<Person> GetAll()
        {
            using (var db = ContextFactory.GetContext()) {
                return db.People
                    .Include(p => p.PersonInterests)
                        .ThenInclude(pi => pi.Interest)
                    .AsEnumerable()
                    .Select(p => {
                        p.Interests = p.PersonInterests.Select(pi => pi.Interest).ToList();
                        p.Occupation = db.Occupations.Find(p.OccupationId);
                        p.Address = db.Addresses.Find(p.AddressId);
                        return p;
                    })
                    .ToList();
            }
        }

        public IEnumerable<Person> GetByName(string name)
        {
            var lowerName = name.Trim().ToLower().Split(' ');
            return GetAll()
                .Where(p => 
                    lowerName.Any(s =>
                        p.FirstName.ToLower().Contains(s) ||
                        p.LastName.ToLower().Contains(s) ||
                        p.Occupation.Name.ToLower().Contains(s) ||
                        p.Address.AddressLine1.ToLower().Contains(s) ||
                        (p.Address.AddressLine2 != null && p.Address.AddressLine2.ToLower().Contains(s)) ||
                        (p.Address.City != null && p.Address.City.ToLower().Contains(s)) ||
                        (p.Address.Region != null && p.Address.Region.ToLower().Contains(s)) ||
                        (p.Address.Planet != null && p.Address.Planet.ToLower().Contains(s)) ||
                        p.Interests.Any(i => i.Name.ToLower().Contains(s))
                    )
                );
        }

        public Person CreatePerson(Person person)
        {
            using (var db = ContextFactory.GetContext()) {
                var interests = _interestsRepository.InsertNewInterests(person.Interests);
                
                var occupation = _occupationsRepository.InsertIfNotExists(person.Occupation);
                // This is used to make sure that EF doesn't create a new Occupation record, since it doesn't realize the work on the line above takes care of it
                person.Occupation = null;
                person.OccupationId = occupation.Id;
                db.SaveChanges();

                db.People.Add(person);
                db.SaveChanges();
                
                _personInterestsRepository.InsertNewPersonInterests(person, interests);

                return GetPersonById(person.Id);
            }
        }

        public Person UpdatePerson(Person update)
        {
            using (var db = ContextFactory.GetContext()) {
                var currentPerson = GetPersonById(update.Id);
                var interests = update.Interests != null ?
                    _interestsRepository.InsertNewInterests(update.Interests) :
                    currentPerson.Interests;
                
                foreach (var property in typeof(Person).GetProperties())
                {
                    var updatedValue = property.GetValue(update);
                    var currentValue = property.GetValue(currentPerson);

                    if (
                        !property.PropertyType.Name.Contains("List") &&
                        property.Name != "Address" &&
                        property.Name != "Occupation" &&
                        property.Name != "Id" &&
                        updatedValue != null &&
                        updatedValue != currentValue
                    ) {
                        property.SetValue(currentPerson, updatedValue);
                    }
                }

                if (interests != currentPerson.Interests) {
                    _personInterestsRepository.InsertNewPersonInterests(currentPerson, interests);
                }

                if (update.Occupation != null) {
                    var previousOccupation = currentPerson.Occupation;
                    var occupation = _occupationsRepository.InsertIfNotExists(update.Occupation);
                    currentPerson.OccupationId = occupation.Id;

                    _occupationsRepository.RemoveIfNotReferenced(previousOccupation);
                }

                if (update.Address != null) {
                    var previousAddress = currentPerson.Address;
                    db.Addresses.Add(update.Address);
                    db.SaveChanges();

                    currentPerson.AddressId = update.Address.Id;

                    _addressRepository.RemoveIfNotReferenced(previousAddress);
                }

                db.People.Update(currentPerson);
                db.SaveChanges();

                return GetPersonById(update.Id);
            }
        }

        public Person DeletePerson(int id)
        {
            using (var db = ContextFactory.GetContext()) {
                var person = db.People.Find(id);
                var occupation = person.Occupation ?? db.Occupations.Find(person.OccupationId);
                var address = person.Address ?? db.Addresses.Find(person.AddressId);

                db.People.Remove(person);

                db.SaveChanges();
                
                _occupationsRepository.RemoveIfNotReferenced(occupation);
                _addressRepository.RemoveIfNotReferenced(address);

                return person;
            }
        }
    }

    public interface IPeopleRepository
    {
        Person GetPersonById(int id);
        IEnumerable<Person> GetAll();
        IEnumerable<Person> GetByName(string name);
        Person CreatePerson(Person Person);
        Person UpdatePerson(Person update);
        Person DeletePerson(int id);
    }
}