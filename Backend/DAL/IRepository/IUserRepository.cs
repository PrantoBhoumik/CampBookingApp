using DAL.Entity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.IRepository
{
   public  interface IUserRepository
    {
        void SaveUser(User userObj);
        Task<User>FindUser(User userObj);
    }
}
