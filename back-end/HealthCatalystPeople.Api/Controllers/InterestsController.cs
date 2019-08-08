using System.Collections.Generic;
using HealthCatalystPeople.Services;
using HealthCatalystPeople.Services.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace HealthCatalystPeople.Api.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class InterestsController : ControllerBase {
        private readonly IInterestsService _interestsService;

        public InterestsController(IInterestsService interestsService)
        {
            _interestsService = interestsService;
        }

        [HttpGet]
        public ActionResult<PaginatedResults<InterestDto>> GetByName(string name, int? page, int? count)
        {
            if (string.IsNullOrEmpty(name)) {
                return BadRequest(new { Message = "'name' field is required" });
            }

            var options = new PaginationOptions();

            if (page.HasValue) {
                options.PageNumber = (int) page;
            }

            if (count.HasValue) {
                options.Count = (int) count;
            }

            return _interestsService.GetByName(name, options);
        }
    }
}