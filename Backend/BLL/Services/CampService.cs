using AutoMapper;
using BLL.Models;
using DAL.Entity;
using DAL.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Service
{
    public class CampService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper mapper;

        public CampService(IUnitOfWork uow, IMapper mapper)
        {
            _uow = uow;
            this.mapper = mapper;
        }
        public async Task<IEnumerable<CampModel>> FindAllCamp()
        {
            var CampData = await _uow.CampRepository.GetAllCampAsync();
            var Camps = mapper.Map<IEnumerable<CampModel>>(CampData);
            return Camps;
        }
        public  void StoreCamp(CampModel campModel)
        {
            var camp = mapper.Map<Camp>(campModel);


            _uow.CampRepository.AddCamp(camp);
           
           
        }
        public async Task<int> UpdateCamp(int CampId, CampModel campModel)
        {
            var CampFromDb = await _uow.CampRepository.FindCamp(CampId);
            mapper.Map(campModel, CampFromDb);
            await _uow.SaveAsync();
            return CampId;
        }
        public async Task<CampModel> SearchCamp(int CampId)
        {
            var CampFromDb = await _uow.CampRepository.FindCamp(CampId);
            var camp = mapper.Map<CampModel>(CampFromDb);
            
            return camp;
        }
        public async Task<int> RemoveCamp(int Id)
        {
            _uow.CampRepository.DeleteCamp(Id);
            await _uow.SaveAsync();
            return Id;
        }
    }
}
