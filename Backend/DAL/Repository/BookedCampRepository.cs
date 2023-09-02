using DAL.Data;
using DAL.Entity;
using DAL.IRepository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repository
{
    public class BookedCampRepository : IBookedCampRepository
    {
        private readonly DataContext _context;
        public BookedCampRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<BookedCamp>> GetBookedCampAsync()
        {
            var campData = await _context.BookedCamps.ToListAsync();
            return campData;
        }
        public async void AddBookedCamp(BookedCamp camp)
        {
            await _context.BookedCamps.AddAsync(camp);
            _context.SaveChanges();
        }

        public void DeleteBookedCamp(int CampId)
        {
            var camp = _context.BookedCamps.Find(CampId);
            _context.BookedCamps.Remove(camp);
        }
    }
}
