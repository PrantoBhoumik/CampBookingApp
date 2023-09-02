using BLL.Models;
using BLL.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;


namespace ValleyCamp.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
       
        private readonly UserService _Bll;
        public UserController(UserService Bll)
        {
           
            _Bll = Bll;

        }
        [HttpPost("authenticate")]
        public async Task<IActionResult> AuthenticateUser( UserModel userObj)
        {
            if (userObj == null)
                return BadRequest();
            

            var userData=  await _Bll.SearchUser(userObj);

            if (userData == null)
            {
                return NotFound(
                new
                {
                    Message = "User Not Found !"
                });

            }
            return Ok(
                new
                {
                    Message = "Logged in SuccessFully !"
                });
        }



        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody]UserModel userModel)
        {
            if(userModel==null)
            {
                return BadRequest();
            }
            _Bll.AddUser(userModel);
            return Ok(
                new
                {
                    Message = "User Registered"
                }) ;

        }


    }
}
