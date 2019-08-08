using System.Linq;
using AutoMapper;
using HealthCatalystPeople.Data.Entities;
using HealthCatalystPeople.Data.Repositories;
using HealthCatalystPeople.Services.Dtos;

namespace HealthCatalystPeople.Services {
    public class PeopleService : IPeopleService
    {
        private readonly IMapper _mapper;
        private readonly IPeopleRepository _peopleRepository;
        private readonly IPaginationService _paginationService;
        
        public PeopleService(
            IMapper mapper,
            IPeopleRepository peopleRepository,
            IPaginationService paginationService
        ) {
            _mapper = mapper;
            _peopleRepository = peopleRepository;
            _paginationService = paginationService;
        }

        public PersonDto CreatePerson(PersonDto muppet)
        {
            var entity = _mapper.Map<Person>(muppet);

            DelayService.Pause();

            return _mapper.Map<PersonDto>(_peopleRepository.CreatePerson(entity));
        }

        public PersonDto GetPersonById(int id)
        {
            DelayService.Pause();

            return _mapper.Map<PersonDto>(_peopleRepository.GetPersonById(id));
        }

        public PaginatedResults<PersonDto> GetPeopleByName(string name, PaginationOptions options)
        {
            DelayService.Pause();
            
            var people = _peopleRepository.GetByName(name);
            
            return _paginationService.GetPaginatedResults<Person, PersonDto>(people, options);
        }

        public PaginatedResults<PersonDto> GetAll(PaginationOptions options)
        {
            DelayService.Pause();

            var results = _peopleRepository.GetAll().ToList();

            return _paginationService.GetPaginatedResults<Person, PersonDto>(results, options);
        }

        public PersonDto UpdatePerson(PersonDto update)
        {
            var entity = _mapper.Map<Person>(update);
            
            if (update.Interests == null) {
                entity.Interests = null;
            }
            
            DelayService.Pause();

            var updatedPerson = _peopleRepository.UpdatePerson(entity);

            return _mapper.Map<PersonDto>(updatedPerson);
        }

        public PersonDto DeletePerson(int id)
        {
            DelayService.Pause();

            return _mapper.Map<PersonDto>(_peopleRepository.DeletePerson(id));
        }
    }

    public interface IPeopleService
    {
        PersonDto CreatePerson(PersonDto muppet);
        PersonDto GetPersonById(int id);
        PaginatedResults<PersonDto> GetPeopleByName(string name, PaginationOptions options);
        PaginatedResults<PersonDto> GetAll(PaginationOptions options);
        PersonDto UpdatePerson(PersonDto update);
        PersonDto DeletePerson(int id);
    }
}