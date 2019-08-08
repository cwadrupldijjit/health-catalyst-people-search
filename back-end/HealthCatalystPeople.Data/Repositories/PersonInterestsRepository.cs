using System.Collections.Generic;
using System.Linq;
using HealthCatalystPeople.Data.Entities;

namespace HealthCatalystPeople.Data.Repositories {
    public class PersonInterestsRepository : IPersonInterestsRepository {
        public void InsertNewPersonInterests(Person person, IEnumerable<Interest> interests)
        {
            using (var db = ContextFactory.GetContext()) {
                var newPersonInterests = new List<PersonInterest>();
                
                foreach (var interest in interests)
                {
                    if (!db.PersonInterests.Any(pi => pi.InterestId == interest.Id && pi.PersonId == person.Id)) {
                        db.PersonInterests.Add(new PersonInterest { InterestId = interest.Id, PersonId = person.Id });
                    }
                }

                var formerPersonInterests = db.PersonInterests.Where(pi => pi.PersonId == person.Id && !interests.Any(i => i.Id == pi.InterestId));

                db.PersonInterests.RemoveRange(formerPersonInterests);

                db.SaveChanges();
            }
        }
    }

    public interface IPersonInterestsRepository {
        void InsertNewPersonInterests(Person person, IEnumerable<Interest> interests);
    }
}