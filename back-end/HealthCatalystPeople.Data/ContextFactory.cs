using System;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;

namespace HealthCatalystPeople.Data {
    public static class ContextFactory {
        public static IConfiguration Config { get; set; }
        public static Func<HealthCatalystPeopleContext> GetContext = () => {
            var connectionString = Config.GetConnectionString("Default");

            var options = new DbContextOptionsBuilder<HealthCatalystPeopleContext>()
                .UseSqlServer(connectionString)
                .Options;

            return new HealthCatalystPeopleContext(options);
        };
    }
}