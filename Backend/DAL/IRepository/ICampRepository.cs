using DAL.Entity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.IRepository
{
    public interface ICampRepository
    {
        Task<IEnumerable<Camp>> GetAllCampAsync();
        void AddCamp(Camp camp);
        void DeleteCamp(int CampId);

        Task<Camp> FindCamp(int Campid);
    }
}
