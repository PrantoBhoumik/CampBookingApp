
using BLL.Models;
using BLL.Service;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;


namespace ValleyCamp.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CampController : Controller
    {
      
        private readonly CampService _Bll;

        public CampController( CampService Bll)
        {
           
            _Bll = Bll;
        }
        // get http://localhost:50475/Camp
        [HttpGet]
        public async Task<IActionResult> GetAllCamp()
        {

            var Camps = await _Bll.FindAllCamp();
            return Ok(Camps); 
        }
        [HttpPost("add")]
        public async Task<IActionResult> AddCampData(CampModel campModel)
        {
           
              _Bll.StoreCamp(campModel);
            return StatusCode(201);
 
        }
        [HttpPut("Update/{CampId}")]
        public async Task<IActionResult> UpdateCampData(int CampId,CampModel campModel)
        {
           
            var id = await _Bll.UpdateCamp(CampId, campModel);
            return StatusCode(200);

        }
        [HttpGet("find/{CampId}")]
        public async Task<IActionResult> FindCampData(int CampId)
        {

            var camp = await _Bll.SearchCamp(CampId);
            return Ok(camp);

        }
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult>DeleteCampData(int id)
        {
           
            var Id = await _Bll.RemoveCamp(id);
            return Ok(Id);
        }

    }
}
