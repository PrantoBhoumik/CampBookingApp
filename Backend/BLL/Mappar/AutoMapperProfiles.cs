using AutoMapper;
using BLL.Models;
using DAL.Entity;



namespace BLL.Mappar
{
    public class AutoMapperProfiles:Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Camp, CampModel>().ReverseMap();
            CreateMap<User, UserModel>().ReverseMap();
            CreateMap<BookedCamp,BookedCampModel>().ReverseMap();
        }
        
    }
}
