using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using HealthCatalystPeople.Data;
using HealthCatalystPeople.Services;
using HealthCatalystPeople.Data.Repositories;
using HealthCatalystPeople.Data.Helpers;
using Microsoft.EntityFrameworkCore;

namespace HealthCatalystPeople.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            ContextFactory.Config = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddTransient<IPeopleService, PeopleService>();
            services.AddTransient<IInterestsService, InterestsService>();
            services.AddTransient<IOccupationsService, OccupationsService>();
            services.AddTransient<IPaginationService, PaginationService>();
            services.AddTransient<IPeopleRepository, PeopleRepository>();
            services.AddTransient<IInterestsRepository, InterestsRepository>();
            services.AddTransient<IPersonInterestsRepository, PersonInterestsRepository>();
            services.AddTransient<IAddressRepository, AddressRepository>();
            services.AddTransient<IOccupationsRepository, OccupationsRepository>();
            services.AddTransient<IStringCompareHelper, StringCompareHelper>();
            services.AddMvc();
            services.AddDbContext<HealthCatalystPeopleContext>((options) => {
                options.UseSqlServer(Configuration.GetConnectionString("Default"));
            });
            services.AddAutoMapper(typeof(MappingProfile));
            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.EnvironmentName == "Debug")
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpa(options => {
                options.Options.SourcePath = "~/index.html";
            });
        }
    }
}
