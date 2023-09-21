using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using taskify.Data;
using taskify.model;

namespace taskify.Controllers
{
    [Route("api/")]
    [ApiController]
    public class Role_DepController : ControllerBase
    {
        private readonly ApplicationDBContext _db;
        public Role_DepController(ApplicationDBContext db)
        {
            _db = db;
        }
        //get all roles
        [HttpGet("Roles")]
        [ProducesResponseType(StatusCodes.Status200OK)]

        public ActionResult<Role> GetRole()
        {
            return Ok(_db.Roles.ToList());
        }

        //get all departments
        [HttpGet("Departments")]
        [ProducesResponseType(StatusCodes.Status200OK)]

        public ActionResult<Department> GetDepartment()
        {
            return Ok(_db.Department.ToList());
        }

    }
}
