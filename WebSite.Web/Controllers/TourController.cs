using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebSite.Dal;
using WebSite.Entity.Models;
using WebSite.Services.Contracts;
using WebSite.Web.Custom;

namespace WebSite.Web.Controllers {
    [Produces ("application/json")]
    [Route ("api/Tour")]
  
    //  [Authorize]
    public class TourController : Controller {
        private readonly ITourService _tourService;
        private readonly IUnitOfWork _unitOfWork;

        public TourController (ITourService tourService, IUnitOfWork unitOfWork) {
            _tourService = tourService;
            _unitOfWork = unitOfWork;
        }

        // GET: api/Workouts
        [HttpGet]
        public async Task<TourModel[]> GetTour () {

              var list =(await _tourService.ListAsync()).ToArray ();

            return list;
        }

        // GET: api/Workouts/5
        [HttpGet ("{id}")]
        public async Task<IActionResult> GetTour ([FromRoute] int id) {

            if (!ModelState.IsValid) {
                return BadRequest (ModelState);
            }

            var tour = await _tourService.ModelAsync (id);

            if (tour == null) {
                return NotFound ();
            }

            return Ok (tour);
        }

        // PUT: api/Workouts/5
        [HttpPut ("{id}")]
        public async Task<IActionResult> PutTour ([FromRoute] int id, [FromBody] TourModel tour) {
            if (!ModelState.IsValid) {
                return BadRequest (ModelState);
            }

            if (id != tour.Id) {
                return BadRequest ();
            }

            if (await _tourService.UpdateAsync (tour)) {
                _unitOfWork.SaveAllChanges ();
                return Ok (tour);
            }
            return NotFound ();
        }

        // POST: api/Tour
        [HttpPost]
        public async Task<IActionResult> PostTour ([FromBody] TourModel tour) {
            Console.WriteLine ("PostTour");
            Console.WriteLine (tour.Title);

            if (!ModelState.IsValid) {
                return BadRequest (ModelState);
            }
            await _tourService.AddAsync (tour);
            await _unitOfWork.SaveAllChangesAsync ();

            return CreatedAtAction ("GetTour", new { id = tour.Id }, tour);
        }

        // DELETE: api/Tour/5
        [HttpDelete ("{id}")]
        public async Task<IActionResult> DeleteTour ([FromRoute] int id) {
       
            if (!ModelState.IsValid) {
                return BadRequest (ModelState);
            }
            if (await _tourService.DeleteAsync (id))
               {

await _unitOfWork.SaveAllChangesAsync();
return Ok (id);
               } 
            return NotFound ();
        }

    }
}