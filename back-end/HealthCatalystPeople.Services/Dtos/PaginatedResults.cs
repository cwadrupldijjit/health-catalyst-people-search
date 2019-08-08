using System.Collections.Generic;

namespace HealthCatalystPeople.Services.Dtos {
    public class PaginatedResults<T> {
        public int CurrentPage { get; set; }
        public int? NextPage { get; set; }
        public int? PreviousPage { get; set; }
        public int LastPage { get; set; }
        public int Total { get; set; }
        public int itemsPerPage { get; set; }
        public List<T> Results { get; set; }
    }
}