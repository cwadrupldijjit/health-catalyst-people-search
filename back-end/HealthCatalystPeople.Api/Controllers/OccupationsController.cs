using System.Collections.Generic;
using HealthCatalystPeople.Services;
using HealthCatalystPeople.Services.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace HealthCatalystPeople.Api.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class OccupationsController : ControllerBase {
        private readonly IOccupationsService _occupationsService;

        public OccupationsController(IOccupationsService occupationsService)
        {
            _occupationsService = occupationsService;
        }

        [HttpGet]
        public ActionResult<PaginatedResults<OccupationDto>> GetByName(string name, int? page, int? count)
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

            return _occupationsService.GetByName(name, options);
        }
    }
}