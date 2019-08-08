using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace HealthCatalystPeople.Data.Entities {
    public class Interest {
        public int Id { get; set; }
        public string Name { get; set; }
        
        [NotMapped]
        public List<PersonInterest> PersonInterests { get; set; }
    }
}