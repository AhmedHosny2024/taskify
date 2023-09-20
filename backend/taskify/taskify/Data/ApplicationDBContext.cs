using Microsoft.EntityFrameworkCore;
using taskify.model;

namespace taskify.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext>options)
            :base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<MyTask> Tasks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
                new User()
                {
                    Id = 3,
                    Name = "ahmed hosny",
                    RoleId = 1,
                    DepartmentId = 1,
                    JobTitle = "software",
                    Profile = new byte[] { 0x00 },
                    Features = new byte[] { 0x00 },
                },
                new User
                {
                    Id = 1,
                    Name = "User1",
                    Profile = new byte[] { 0x01, 0x02, 0x03, 0x04 },
                    Features = new byte[] { 0x05, 0x06, 0x07, 0x08 },
                    RoleId = 1,
                    DepartmentId = 1,
                    JobTitle = "JobTitle1"
                },
                new User
                {
                    Id = 2,
                    Name = "User2",
                    Profile = new byte[] { 0x01, 0x02, 0x03, 0x04 },
                    Features = new byte[] { 0x05, 0x06, 0x07, 0x08 },
                    RoleId = 2,
                    DepartmentId = 2,
                    JobTitle = "JobTitle2"
                }
            );
            modelBuilder.Entity<MyTask>().HasData(
                new MyTask
              {
                  Id = 1,
                  Title = "Task 1",
                  Disc = "Description for Task 1",
                  Category = "Category 1",
                  Date = "2023-09-20",
                  TaskStatusId = 1,
                  UserId = 1
              },
                new MyTask
                {
                    Id = 2,
                    Title = "Task 2",
                    Disc = "Description for Task 2",
                    Category = "Category 2",
                    Date = "2023-09-21",
                    TaskStatusId = 2,
                    UserId = 2
                },
                new MyTask
                {
                    Id = 3,
                    Title = "Task 2",
                    Disc = "Description for Task 2",
                    Category = "Category 2",
                    Date = "2023-09-21",
                    TaskStatusId = 2,
                    UserId = 2
                }
            );
        }
    }
}
