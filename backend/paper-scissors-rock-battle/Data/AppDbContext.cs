using Microsoft.EntityFrameworkCore;
using paper_scissors_rock_battle.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace paper_scissors_rock_battle.Data
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions options): base(options) 
        { 
        }
        public DbSet<Match> Matches { get; set; }
    }
}
