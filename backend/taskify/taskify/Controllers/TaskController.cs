using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using taskify.Data;
using taskify.model;
using taskify.model.Dto;

namespace taskify.Controllers
{
    [Route("api/Task")]
    [ApiController]
    public class MyTaskController : ControllerBase
    {

        private readonly ApplicationDBContext _db;
        public MyTaskController(ApplicationDBContext db)
        {
            _db = db;
        }
        // add task 
        [HttpPost("add")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<User> AddTask([FromBody] TaskDto t)
        {
            MyTask x = new MyTask()
            {
                Title = t.Title,
                Disc = t.Disc,
                Category = t.Category,
                Date = t.Date,
                TaskStatusId = t.TaskStatusId,
                UserId = t.UserId,
            };
            if (t == null)
            {
                return BadRequest(t);
            }
            _db.Tasks.Add(x);
            _db.SaveChanges();
            return Ok(x);
        }

        // delete task
        [HttpDelete("delete/{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<User> DeleteTask(int id)
        {
            if (id == 0)
            {
                return BadRequest();
            }
            var task = _db.Tasks.FirstOrDefault(u => u.Id == id);
            if (task == null)
            {
                return NotFound();
            }
            _db.Tasks.Remove(task);
            _db.SaveChanges();
            return Ok();
        }
        // update task
        /*    [HttpPut("update")]
            [ProducesResponseType(StatusCodes.Status200OK)]
            [ProducesResponseType(StatusCodes.Status400BadRequest)]
            public ActionResult<User> UpdateTask( [FromBody] MyTask u)
            {
                if (u.Id == 0 || u == null)
                {
                    return BadRequest();
                }
                _db.Tasks.Update(u);
                _db.SaveChanges();
                return Ok();
            }
        */

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<MyTask> Update([FromBody] UpdatedTask t )
        {

            if (t == null)
            {
                return BadRequest();
            }
            var updated = _db.Tasks.FirstOrDefault( u => (u.Id == t.Id) );
            if (updated == null)
            {
                return NotFound();
            }

            updated.Title=t.Title;
            updated.Disc = t.Disc;
            updated.Category=t.Category;
            updated.TaskStatusId = t.TaskStatusId;
            _db.Tasks.Update(updated);
            _db.SaveChanges();
            return Ok();
        }

        /// how to call 
        /// in the body send : 
        /// "op":"replace",
        /// "path":"attribute name to update ",
        /// "value":"new val"
        // get all tasks for user (user id send in url)
        [HttpGet("{id:int}")]
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
            var tasks = _db.Tasks.Where(t => t.UserId == id);
            return Ok(tasks);
        }


    }
}