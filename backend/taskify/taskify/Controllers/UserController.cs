using Microsoft.AspNetCore.Mvc;
using taskify.Data;
using taskify.model;
using taskify.model.Dto;
using System.Text;

namespace taskify.Controllers
{
    [Route("api/User")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDBContext _db;
        /*private readonly IWebHostEnvironment _env;*/
        private readonly HttpClient _httpClient;
        /*private readonly IHttpClientFactory _httpClientFactory;*/

        public UserController(ApplicationDBContext db /*, IWebHostEnvironment environment*/, IHttpClientFactory httpClientFactory)
        {
            _httpClient = httpClientFactory.CreateClient();
            _httpClient.BaseAddress = new Uri("http://localhost:8080/");
            /*_env   = environment;*/
            _db = db;
        }

        // get all users in deparrment
        [HttpGet("All/{departnment:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<IEnumerable<User>> GetUsers(int departnment)
        {
            /*var dep = _db.Department.FirstOrDefault(d => d.Id == departnment);*/
            if (departnment == 0 )
            {
                return BadRequest();
            }
            var user = _db.Users.Where(u => u.DepartmentId == departnment);
            return Ok(user);
        }

        // get user data by id
        [HttpGet("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public  ActionResult<User> GetUserById(int id)
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
            var rol =  _db.Roles.FirstOrDefault(u => u.Id == user.RoleId);

            var dep =  _db.Department.FirstOrDefault(u => u.Id == user.DepartmentId);
            //////////////////////////////////////////////////////////////////////////////////////////////////
            // You can return the image as a file or its URL as needed
            // For example, returning the URL:
            var data = new
            {
                Id = user.Id,
                Name = user.Name,
                Role = rol,
                Department = dep,
                JobTitle = user.JobTitle,
                Image = user.Image,
                /*Features = user.Features*/
            };

            return Ok(data);
        }

        // get user in database to log in => forward to python function
        [HttpPost("image")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        /*[ProducesResponseType(StatusCodes.Status404NotFound)]*/
       
        public async Task<ActionResult<User>> GetUserByImage([FromBody]Image i)
        {
            string image = i.image;
            if (image == null)
            {
                return BadRequest();

            }

            /// send for python to know if valid or no

            string jsonContent = Newtonsoft.Json.JsonConvert.SerializeObject(i);

            // Create a StringContent object with the JSON data
            var content = new StringContent(jsonContent, Encoding.UTF8, "application/json");

            // Send the POST request to your Flask server
            HttpResponseMessage response =await  _httpClient.PostAsync("/GetImage/", content);

            // Check if the request was successful
            if (response.IsSuccessStatusCode)
            {
                // Optionally, you can read and process the response from the Flask server here.
                var responseContent = await response.Content.ReadAsStringAsync();
                var responseObject = Newtonsoft.Json.JsonConvert.DeserializeObject<Id>(responseContent);
                var user = _db.Users.FirstOrDefault(u => u.Id == responseObject.id);

                /// add attendance for this user
                /* var user = new User()
             {
                 Id = 2,
                 DepartmentId = 2,
                 Image = "Images/hosny",
                 JobTitle = "Backend Developer",
                 Name = "Moaz Ahmed",
                 RoleId = 1
             };*/

                var rol = _db.Roles.FirstOrDefault(u => u.Id == user.RoleId);
                var dep = _db.Department.FirstOrDefault(u => u.Id == user.DepartmentId);

                var data = new
                {
                    Id = user.Id,
                    Name = user.Name,
                    Role = rol,
                    Department = dep,
                    JobTitle = user.JobTitle,
                    Image = "https://localhost:7207//images/" + user.Image,
                };
                Attendance attend = new Attendance()
                {
                    Date = DateTime.Now.ToString("MM/dd/yyyy"),
                    /*Date = DateTime.Now.ToString("MM/dd/yyyy"),*/
                    UserId = user.Id,
                    /*UserId = 6*/
                };
                var insertedBeore = _db.Attendance.FirstOrDefault(x => (x.UserId == attend.UserId && x.Date == attend.Date));

                if (insertedBeore == null)
                {
                    _db.Attendance.Add(attend);
                    _db.SaveChanges();
                }
                return Ok(data);
            }
            else
            {
                return StatusCode((int)response.StatusCode, response.Content);
            }
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
        public async Task< ActionResult<User> > AddUser([FromBody]UserDto u)
        {
            if (u == null)
            {
                return BadRequest(u);
            }

            Image i = new Image() { image=u.Image };

            string jsonContent = Newtonsoft.Json.JsonConvert.SerializeObject(i);

            // Create a StringContent object with the JSON data
            var content = new StringContent(jsonContent, Encoding.UTF8, "application/json");

            // Send the POST request to your Flask server
            HttpResponseMessage response = await _httpClient.PostAsync("/Valid/", content);

            // Check if the request was successful
            if (response.IsSuccessStatusCode)
            {
                // Optionally, you can read and process the response from the Flask server here.
                var responseContent = await response.Content.ReadAsStringAsync();
                var responseObject = Newtonsoft.Json.JsonConvert.DeserializeObject<Id>(responseContent);

                byte[] imageBytes = Convert.FromBase64String(u.Image);

                // Generate a unique file name, or use any naming convention you prefer
                string fileName = Guid.NewGuid().ToString() + ".png";

                // Define the path where you want to save the image (you may configure this)
                string imagePath = Path.Combine("wwwroot", "Images", fileName);

                // Save the image to the specified path
                System.IO.File.WriteAllBytesAsync(imagePath, imageBytes);
                u.Image = fileName;

                User x = new User()
                {
                    Name = u.Name,
                    RoleId = u.RoleId,
                    DepartmentId = u.DepartmentId,
                    JobTitle = u.JobTitle,
                    Image = "https://localhost:7207//images/" + u.Image,
                    /*  Features = u.Features,*/
                };
                _db.Users.Add(x);
                _db.SaveChanges();
                Attendance attend = new Attendance()
                {
                    Date = DateTime.Now.ToString("MM/dd/yyyy"),
                    /*Date = DateTime.Now.ToString("MM/dd/yyyy"),*/
                    UserId = x.Id,
                    /*UserId = 6*/
                };
                var insertedBeore = _db.Attendance.FirstOrDefault(x => (x.UserId == attend.UserId && x.Date == attend.Date));

                if (insertedBeore == null)
                {
                    _db.Attendance.Add(attend);
                    _db.SaveChanges();
                }
                
                return Ok(x);
            }
            else
            {
                return StatusCode((int)response.StatusCode, response.Content);
            }
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
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<User> UpdateUser( [FromBody]updateUser u)
        {
            if(u.Id==0 || u==null)
            {
                return BadRequest();
            }
            var updated = _db.Users.FirstOrDefault(us => (us.Id == u.Id));
            if (updated == null)
            {
                return NotFound("the is no user with this is");
            }
            if (u.Image != updated.Image)
            {
                byte[] imageBytes = Convert.FromBase64String(u.Image);

                // Generate a unique file name, or use any naming convention you prefer
                string fileName = Guid.NewGuid().ToString() + ".png";

                // Define the path where you want to save the image (you may configure this)
                string imagePath = Path.Combine("wwwroot", "Images", fileName);

                // Save the image to the specified path
                System.IO.File.WriteAllBytesAsync(imagePath, imageBytes);
                u.Image = fileName;
                u.Image = "https://localhost:7207//images/" + u.Image;

            }
            updated.Name = u.Name;
            updated.Image =u.Image ;
            updated.RoleId = u.RoleId;
            updated.DepartmentId = u.DepartmentId;
            updated.JobTitle = u.JobTitle;
            _db.Users.Update(updated);
            _db.SaveChanges();
            return Ok();
        }

    }
}
