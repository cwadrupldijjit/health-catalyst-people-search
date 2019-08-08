using AutoMapper;
using HealthCatalystPeople.Data.Entities;
using HealthCatalystPeople.Services.Dtos;

namespace HealthCatalystPeople.Services {
    
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Person, PersonDto>().ReverseMap();
            CreateMap<Interest, InterestDto>().ReverseMap();
            CreateMap<Address, AddressDto>().ReverseMap();
            CreateMap<Occupation, OccupationDto>().ReverseMap();
            CreateMap<PersonInterest, PersonInterestDto>().ReverseMap();
        }
    }
}