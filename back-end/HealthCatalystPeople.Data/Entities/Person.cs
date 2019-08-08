using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace HealthCatalystPeople.Data.Entities {
    public class Person {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int? Age { get; set; }
        public string Picture { get; set; }
        public string Email { get; set; }
        public DateTime? Created { get; set; }
        public string Notes { get; set; }
        
        [ForeignKey("Occupations")]
        public int? OccupationId { get; set; }
        public Occupation Occupation { get; set; }
        
        [ForeignKey("Addresses")]
        public int? AddressId { get; set; }
        public Address Address { get; set; }

        [NotMapped]
        public List<Interest> Interests { get; set; }
        [NotMapped]
        public List<PersonInterest> PersonInterests { get; set; } = null;
    }
}