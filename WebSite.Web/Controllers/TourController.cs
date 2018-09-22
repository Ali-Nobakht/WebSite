using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebSite.Dal;
using WebSite.Entity.Models;
using WebSite.Services.Contracts;

namespace WebSite.Web.Controllers {
    [Produces ("application/json")]
    [Route ("api/Tour")]
    //  [Authorize]
    public class TourController : Controller {
        private readonly IServiceTour _sericeTuor;
        private readonly IUnitOfWork _unitOfWork;

        public TourController (IServiceTour sericeTuor, IUnitOfWork unitOfWork) {
            _sericeTuor = sericeTuor;
            _unitOfWork = unitOfWork;
        }

        // GET: api/Workouts
        [HttpGet]
        public TourModel[] GetTour () {

            var list = _sericeTuor.GetTours ().ToArray ();
            Console.WriteLine("Testtttt:::"+list.Count());

            return list;
        }

        // GET: api/Workouts/5
        [HttpGet ("{id}")]
        public async Task<IActionResult> GetTour ([FromRoute] int id) {

            if (!ModelState.IsValid) {
                return BadRequest (ModelState);
            }

            var tour = await _sericeTuor.GetTourAsync (id);

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

            if (_sericeTuor.UpdateTour (tour))
                return Ok (tour);
            return NotFound ();
        }

        // POST: api/Tour
        [HttpPost]
        public async Task<IActionResult> PostTour ([FromBody] TourModel tour) {
            Console.WriteLine("PostTour");
            Console.WriteLine(tour.Title);

            if (!ModelState.IsValid) {
                return BadRequest (ModelState);
            }
            await _sericeTuor.AddTourAsync (tour);

            return CreatedAtAction ("GetTour", new { id = tour.Id }, tour);
        }

        // DELETE: api/Tour/5
        [HttpDelete ("{id}")]
        public async Task<IActionResult> DeleteTour ([FromRoute] int id) {
            if (!ModelState.IsValid) {
                return BadRequest (ModelState);
            }
            if (await _sericeTuor.DeleteTourAsunc (id))
                return Ok (id);
            return NotFound ();
        }

    }
}