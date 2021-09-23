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
        public AppDbContext(DbContextOptions options): base(options) { }
        public DbSet<Player> Players { get; set; }
        public DbSet<Match> Matches { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Match>()
                .HasOne(m => m.Player)
                .WithMany(p => p.Matches)
                .HasForeignKey(m => m.PlayerId);
            //modelBuilder.Entity<Player>()
            //  .HasMany(p => p.Matches)
            //  .WithOne(m => m.Player!)
            //  .HasForeignKey(p => p.PlayerId);
        }
    }
}
