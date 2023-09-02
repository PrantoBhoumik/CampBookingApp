using DAL.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Data
{
    public class DataContext: DbContext
    {
        public  DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Camp>Camps { get; set; }
        public DbSet<BookedCamp> BookedCamps { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
