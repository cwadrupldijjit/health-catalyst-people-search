using System;
using System.Collections.Generic;

namespace HealthCatalystPeople.Services.Dtos {
    public class PersonDto {
        public int? Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int? Age { get; set; }
        public string Picture { get; set; }
        public string Email { get; set; }
        public DateTime? Created { get; set; }
        public string Notes { get; set; }
        public int? OccupationId { get; set; }
        public OccupationDto Occupation { get; set; }
        public int? AddressId { get; set; }
        public AddressDto Address { get; set; }

        public List<InterestDto> Interests { get; set; } = null;
    }
}