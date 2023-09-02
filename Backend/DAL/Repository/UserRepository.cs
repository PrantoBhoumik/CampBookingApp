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
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;
        public UserRepository(DataContext context)
        {
            _context = context;
        }
        public async  Task<User> FindUser(User userObj)
        {
            var user= await _context.Users.FirstOrDefaultAsync(x=>x.UserName==userObj.UserName && x.Password==userObj.Password);

            return user;
        }

        public  async void SaveUser(User userObj)
        {
            await _context.Users.AddAsync(userObj);
            _context.SaveChanges();

        }

       
    }
}
