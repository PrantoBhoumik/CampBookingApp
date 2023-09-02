using AutoMapper;
using BLL.Models;
using DAL.Entity;
using DAL.UnitOfWork;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BLL.Services
{
   public class BookedCampService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper mapper;

        public BookedCampService(IUnitOfWork uow, IMapper mapper)
        {
            _uow = uow;
            this.mapper = mapper;
        }
        public async Task<IEnumerable<BookedCampModel>> FindAllBookedCamp()
        {
            var CampData = await _uow.BookedCampRepository.GetBookedCampAsync();
            var Camps = mapper.Map<IEnumerable<BookedCampModel>>(CampData);
            return Camps;
        }
        public void StoreBookedCamp(BookedCampModel CampModel)
        {
            var camp = mapper.Map<BookedCamp>(CampModel);


            _uow.BookedCampRepository.AddBookedCamp(camp);
           
        }
        public async Task<int> RemoveBookedCamp(int Id)
        {
            _uow.BookedCampRepository.DeleteBookedCamp(Id);
            await _uow.SaveAsync();
            return Id;
        }
    }
}
