using DAL.IRepository;
using DAL.Repository;
using DAL.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Data
{
   public class UnitOfWork : IUnitOfWork
    {
        private readonly DataContext _context;
        public UnitOfWork(DataContext context)
        {
            _context = context;

        }
        public ICampRepository CampRepository => new CampRepository(_context);
        public IUserRepository UserRepository => new UserRepository(_context);

        public IBookedCampRepository BookedCampRepository =>  new BookedCampRepository(_context);

        public async Task<bool> SaveAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
