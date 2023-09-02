using DAL.IRepository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.UnitOfWork
{
    public interface IUnitOfWork
    {
        ICampRepository CampRepository { get; }
        IUserRepository UserRepository { get; }
        IBookedCampRepository BookedCampRepository { get; }
        Task<bool> SaveAsync();

    }
}
