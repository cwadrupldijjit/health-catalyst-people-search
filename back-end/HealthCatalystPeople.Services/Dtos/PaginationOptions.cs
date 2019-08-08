namespace HealthCatalystPeople.Services.Dtos {
    public class PaginationOptions {
        public int Count { get; set; } = 10;
        public int PageNumber { get; set; } = 1;
    }
}