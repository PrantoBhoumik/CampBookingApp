using DAL.Entity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.IRepository
{
    public interface IBookedCampRepository
    {
        Task<IEnumerable<BookedCamp>> GetBookedCampAsync();
        void AddBookedCamp(BookedCamp camp);
        void DeleteBookedCamp(int CampId);
    }
}
