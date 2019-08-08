using HealthCatalystPeople.Data.Entities;
using HealthCatalystPeople.Data.Repositories;
using HealthCatalystPeople.Services.Dtos;

namespace HealthCatalystPeople.Services {
    public class OccupationsService : IOccupationsService {
        private readonly IOccupationsRepository _occupationsRepository;
        private readonly IPaginationService _paginationService;

        public OccupationsService(IOccupationsRepository occupationsRepository, IPaginationService paginationService)
        {
            _occupationsRepository = occupationsRepository;
            _paginationService = paginationService;
        }

        public PaginatedResults<OccupationDto> GetByName(string name, PaginationOptions options)
        {
            return _paginationService.GetPaginatedResults<Occupation, OccupationDto>(_occupationsRepository.FindOccupationByName(name), options);
        }
    }

    public interface IOccupationsService {
        PaginatedResults<OccupationDto> GetByName(string name, PaginationOptions options);
    }
}