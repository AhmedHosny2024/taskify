using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using taskify.Data;
using taskify.model;
using taskify.model.Dto;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace taskify.Controllers
{
    [Route("api/User")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDBContext _db;
        public UserController(ApplicationDBContext db)
        {
            _db = db;
        }

        // get all users in deparrment
        [HttpGet]
        public ActionResult<IEnumerable<User>> GetUsers(string departnment)
        {
            var dep = _db.Department.FirstOrDefault(d => d.Name == departnment);
            var user = _db.Users.Where(u => u.DepartmentId == dep.Id);
            return Ok(User);
        }

        // get user data by id
        [HttpGet("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]

        public ActionResult<User> GetUserById(int id)
        {
            if (id == 0)
            {
                return BadRequest();
            }
            var user=_db.Users.FirstOrDefault(u=>u.Id==id);
            if (user == null)
            {
                return NotFound();
            }
            var rol=_db.Roles.FirstOrDefault(u=>u.Id==user.RoleId);
            var dep = _db.Department.FirstOrDefault(u => u.Id == user.DepartmentId);
            var data = new
            {
                Id = user.Id,
                Name = user.Name,
                Role = rol,
                Department = dep,
                JobTitle = user.JobTitle,
                Profile = user.Profile,
                Features = user.Features
            };

            return Ok(data);
        }

        // get user in database to log in => forward to python function
        [HttpGet("image")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<User> GetUserByImage(byte[] image)
        {
            if (image == null)
            {
                return BadRequest();

            }
            var user = new User { Profile = image };
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

     /*   // get user attendance
        [HttpGet("attendance/{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<User> GetUserAttendance(int id)
        {
            if (id == 0)
            {
                return BadRequest();
            }
            var user = _db.Users.FirstOrDefault(u => u.Id == id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }
    */

        // add user 
        [HttpPost("add")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<User> AddUser([FromBody]UserDto u)
        {
            var user = _db.Users.FirstOrDefault(us => us.Features == u.Features);
            User x = new User()
            {
                Name = u.Name,
                RoleId = u.RoleId,
                DepartmentId = u.DepartmentId,
                JobTitle = u.JobTitle,
                Profile = u.Profile,
                Features = u.Features,
            };
            if (u == null || user!=null)
            {
                return BadRequest(u);
            }

            /*if (u.Id > 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);

            }*/
            _db.Users.Add(x);
            _db.SaveChanges();
            return Ok(u);
        }

        // delete user info
        [HttpDelete("delete/{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<User> DeleteUser(int id)
        {
            if (id == 0)
            {
                return BadRequest();
            }
            var user = _db.Users.FirstOrDefault(u => u.Id == id);
            if (user == null)
            {
                return NotFound();
            }
            _db.Users.Remove(user);
            _db.SaveChanges();
            return Ok();
        }
        // update user info
        [HttpPut("update")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<User> UpdateUser( [FromBody]updateUser u)
        {
            if(u.Id==0 || u==null)
            {
                return BadRequest();
            }
            var updated = _db.Users.FirstOrDefault(us => (us.Id == u.Id));
            if (updated == null)
            {
                return NotFound();
            }
            updated.Name = u.Name;
            updated.Profile = u.Profile;
            updated.Features = u.Features;
            updated.RoleId = u.RoleId;
            updated.DepartmentId = u.DepartmentId;
            updated.JobTitle = u.JobTitle;
            _db.Users.Update(updated);
            _db.SaveChanges();
            return Ok();
        }

    }
}
