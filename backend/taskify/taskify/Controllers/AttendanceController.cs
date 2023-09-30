using Microsoft.AspNetCore.Mvc;
using taskify.Data;
using taskify.model;
using taskify.model.Dto;

namespace taskify.Controllers
{
    [Route("api/Attendance")]
    [ApiController]
    public class AttendanceController : ControllerBase
    {
        private readonly ApplicationDBContext _db;
        public AttendanceController(ApplicationDBContext db)
        {
            _db = db;
        }
        //get user attendance
        [HttpGet("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Attendance> GetAttendance(int id)
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
            var attendance = _db.Attendance.Where(t => t.UserId == id);

            return Ok(attendance);
        }

        // auto add when log in
       /* // add attendance 
        [HttpPost("add")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Attendance> AddAttendance([FromBody] AttendanceDto a)
        {
            Attendance x = new Attendance()
            {
                Date = a.Date,
                UserId = a.UserId,
            };
            var insertedBeore = _db.Attendance.FirstOrDefault(x => (x.UserId == a.UserId && a.Date == x.Date));

            if (insertedBeore == null)
            {
                if (a == null)
                {
                    return BadRequest(a);
                }

                _db.Attendance.Add(x);
                _db.SaveChanges();
            }
                return Ok();

        }
        */
    }
}
