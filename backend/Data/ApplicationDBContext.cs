using backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class ApplicationDBContext : IdentityDbContext<AppUser>
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {
        }
        public DbSet<Habit> Habits { get; set; }
        public DbSet<Category> Categories { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Habit>(x => x.HasKey(h => new { h.Id }));

            builder.Entity<Habit>()
                .HasOne(u => u.CreatedBy)
                .WithMany(h => h.Habits)
                .HasForeignKey(h => h.CreatedById);

            builder.Entity<Category>(x => x.HasKey(c => c.Id));

            builder.Entity<Category>()
                .HasOne(u => u.CreatedBy)
                .WithMany(c => c.Categories)
                .HasForeignKey(c => c.CreatedById);

            builder.Entity<Habit>()
                .HasOne(h => h.Category)
                .WithMany(c => c.Habits)
                .HasForeignKey(h => h.CategoryId)
                .OnDelete(DeleteBehavior.SetNull);

            List<IdentityRole> roles =
            [
                new IdentityRole
                {
                    Name = "Admin",
                    NormalizedName = "ADMIN"
                },
                new IdentityRole
                {
                    Name = "User",
                    NormalizedName = "USER"
                },
            ];
            builder.Entity<IdentityRole>().HasData(roles);
        }
    }
}