using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HealthCatalystPeople.Services;
using HealthCatalystPeople.Services.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace HealthCatalystPeople.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private readonly IPeopleService _peopleService;

        public PeopleController(IPeopleService peopleService)
        {
            _peopleService = peopleService;
        }
        
        [HttpGet]
        public ActionResult<PaginatedResults<PersonDto>> Get(int? page, int? count, string query = "")
        {
            var options = new PaginationOptions();

            if (page.HasValue) {
                options.PageNumber = (int) page;
            }

            if (count.HasValue) {
                options.Count = (int) count;
            }

            if (!string.IsNullOrWhiteSpace(query)) {
                return _peopleService.GetPeopleByName(query, options);
            }
            
            return _peopleService.GetAll(options);
        }

        [HttpGet("{id}")]
        public ActionResult<PersonDto> Get(int id)
        {
            return _peopleService.GetPersonById(id);
        }

        [HttpPost]
        public ActionResult<PersonDto> Post([FromBody] PersonDto person)
        {
            return _peopleService.CreatePerson(person);
        }

        [HttpPatch("{id}")]
        public ActionResult<PersonDto> Patch(int id, [FromBody] PersonDto person)
        {
            return _peopleService.UpdatePerson(person);
        }

        [HttpDelete("{id}")]
        public ActionResult<PersonDto> Delete(int id)
        {
            return _peopleService.DeletePerson(id);
        }
    }
}
