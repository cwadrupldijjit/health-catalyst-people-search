using HealthCatalystPeople.Data.Entities;
using HealthCatalystPeople.Data.Repositories;
using HealthCatalystPeople.Services.Dtos;

namespace HealthCatalystPeople.Services {
    public class InterestsService : IInterestsService {
        private readonly IInterestsRepository _interestsRepository;
        private readonly IPaginationService _paginationService;

        public InterestsService(IInterestsRepository occupationsRepository, IPaginationService paginationService)
        {
            _interestsRepository = occupationsRepository;
            _paginationService = paginationService;
        }

        public PaginatedResults<InterestDto> GetByName(string name, PaginationOptions options)
        {
            return _paginationService.GetPaginatedResults<Interest, InterestDto>(_interestsRepository.GetByName(name), options);
        }
    }

    public interface IInterestsService {
        PaginatedResults<InterestDto> GetByName(string name, PaginationOptions options);
    }
}