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
        public ActionResult<IEnumerable<User>> GetUsers()
        {
            return Ok(_db.Users.ToList());
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
            return Ok(user);
        }

        // get user in database to log in => fo to python function
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

        // get user attendance
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

        // get user tasks
        [HttpGet("tasks/{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<User> GetUserTasks(int id)
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
        public ActionResult<User> UpdateUser( [FromBody]User u)
        {
            if(u.Id==0 || u==null)
            {
                return BadRequest();
            }
            _db.Users.Update(u);
            _db.SaveChanges();
            return Ok();
        }


        /// DONT NEED IT JUST FOR LEARN
        
        [HttpPatch("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<User> Patchtest(int id, JsonPatchDocument<User>patch)
        {
            if (id == 0 || patch == null)
            {
                return BadRequest();
            }
            var user = _db.Users.FirstOrDefault(u => u.Id == id);
            if (user == null)
            {
                return BadRequest();
            }
            patch.ApplyTo(user, ModelState);
            if(!ModelState.IsValid) { 
                return BadRequest(ModelState);
            }
            _db.Users.Update(user);
            _db.SaveChanges();
            return Ok();
        }
        
        /// how to call 
        /// in the body send : 
        /// "op":"replace",
        /// "path":"attribute name to update ",
        /// "value":"new val"
    }
}
