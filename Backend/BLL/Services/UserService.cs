using AutoMapper;
using BLL.Models;
using DAL.Entity;
using DAL.UnitOfWork;
using System.Threading.Tasks;

namespace BLL.Services
{
   public class UserService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public UserService(IMapper mapper, IUnitOfWork uow)
        {
            _uow = uow;
            _mapper = mapper;

        }

        public async Task<UserModel> SearchUser(UserModel userObj)
        {
            var Obj = _mapper.Map<User>(userObj);
            var userData = await _uow.UserRepository.FindUser(Obj);
            var user= _mapper.Map<UserModel>(userData);
            return user;
        }
        public  void AddUser(UserModel userModel)
        {
            var user = _mapper.Map<User>(userModel);


            _uow.UserRepository.SaveUser(user);
            

        }
    } 
}
