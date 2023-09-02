using BLL.Models;
using BLL.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;


namespace ValleyCamp.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BookedCampController : Controller
    {
        
        private readonly BookedCampService _Bll;
        public BookedCampController(BookedCampService Bll)
        {
            
            _Bll = Bll;
           
        }
        // get http://localhost:50475/BookedCamp
        [HttpGet]
        public async Task<IActionResult> GetBookedCamp()
        {
         
            var BookedCamps = await _Bll.FindAllBookedCamp();
            return Ok(BookedCamps);
        }
        // post http://localhost:50475/BookedCamp/add
        [HttpPost("add")]
        public async Task<IActionResult> AddCampData(BookedCampModel campModel)
        {
            
            _Bll.StoreBookedCamp(campModel);
            return StatusCode(201);

        }
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteCampData(int id)
        {

            var Id = await _Bll.RemoveBookedCamp(id);
            return Ok(Id);
        }
    }
}
