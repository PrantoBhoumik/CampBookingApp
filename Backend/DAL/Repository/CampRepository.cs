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
   public class CampRepository : ICampRepository
    {
        private readonly DataContext _context;
        public CampRepository( DataContext context)
        {
            _context = context;
        }
        public async void AddCamp(Camp camp)
        {
            await _context.Camps.AddAsync(camp);
            _context.SaveChanges();
        }

        public void DeleteCamp(int CampId)
        {
            var camp = _context.Camps.Find(CampId);
            _context.Camps.Remove(camp);
        }

        public async Task<Camp> FindCamp(int CampId)
        {
            return await _context.Camps.FindAsync(CampId);
        }

        public async Task<IEnumerable<Camp>> GetAllCampAsync()
        {
            var campData = await _context.Camps.ToListAsync();
            return campData;
        }

       
    }
}
