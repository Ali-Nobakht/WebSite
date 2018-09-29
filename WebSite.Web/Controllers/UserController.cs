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
    [Route ("api/User")]

    //  [Authorize]
    public class UserController : Controller {
        private readonly IUserService _userService;
        private readonly IUnitOfWork _unitOfWork;

        public UserController (IUserService userService, IUnitOfWork unitOfWork) {
            _userService = userService;
            _unitOfWork = unitOfWork;
        }

        // GET: api/Workouts
        [HttpGet]
        public async Task<UserModel[]> Getuser () {

            var list = (await _userService.ListAsync ()).ToArray ();

            return list;
        }

        // GET: api/Workouts/5
        [HttpGet ("{id}")]
        public async Task<IActionResult> Getuser ([FromRoute] int id) {

            if (!ModelState.IsValid) {
                return BadRequest (ModelState);
            }

            var user = await _userService.ModelAsync (id);

            if (user == null) {
                return NotFound ();
            }

            return Ok (user);
        }

        // PUT: api/Workouts/5
        [HttpPut ("{id}")]
        public async Task<IActionResult> Putuser ([FromRoute] int id, [FromBody] UserModel user) {
            if (!ModelState.IsValid) {
                return BadRequest (ModelState);
            }

            if (id != user.Id) {
                return BadRequest ();
            }

            if (await _userService.UpdateAsync (user)) {
                _unitOfWork.SaveAllChanges ();
                return Ok (user);
            }
            return NotFound ();
        }

        // POST: api/user
        [HttpPost]
        public async Task<IActionResult> Postuser ([FromBody] UserModel user) {

            if (!ModelState.IsValid) {
                return BadRequest (ModelState);
            }
            await _userService.AddAsync (user);
            await _unitOfWork.SaveAllChangesAsync ();

            return CreatedAtAction ("Getuser", new { id = user.Id }, user);
        }

        // DELETE: api/user/5
        [HttpDelete ("{id}")]
        public async Task<IActionResult> Deleteuser ([FromRoute] int id) {

            if (!ModelState.IsValid) {
                return BadRequest (ModelState);
            }
            if (await _userService.DeleteAsync (id)) {

                await _unitOfWork.SaveAllChangesAsync ();
                return Ok (id);
            }
            return NotFound ();
        }

    }
}