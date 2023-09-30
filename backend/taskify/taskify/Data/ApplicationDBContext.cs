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
        public DbSet<Role> Roles { get; set; }
        public DbSet<Department> Department { get; set; }
        public DbSet<Task_Status> Task_Status { get; set; }
        public DbSet<Attendance> Attendance { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Role>().HasData(
               new Role
               {
                   Id = 1,
                   Name="User"
               },
               new Role
               {
                   Id = 2,
                   Name = "Admin"
               }
           );
            modelBuilder.Entity<Department>().HasData(
              new Department
              {
                  Id = 1,
                  Name = "Application"
              },
              new Department
              {
                  Id = 2,
                  Name = "IT"
              },
              new Department
              {
                  Id = 3,
                  Name = "Hard Disk"
              },
              new Department
              {
                  Id = 4,
                  Name = "AI"
              }
          );
            modelBuilder.Entity<Task_Status>().HasData(
               new Task_Status
               {
                   Id = 1,
                   Name = "ToDo"
               },
               new Task_Status
               {
                   Id = 2,
                   Name = "InProgress"
               },
               new Task_Status
               {
                   Id = 3,
                   Name = "Done"
               }
           );
            modelBuilder.Entity<MyTask>().HasData(
               new MyTask
               {
                   Id = 1,
                   Title = "Task 1",
                   Disc = "Description for Task 1",
                   Category = "Junior",
                   Date = "2023-09-20",
                   Task_StatusId = 1,
                   UserId = 1
               },
               new MyTask
               {
                   Id = 2,
                   Title = "Task 2",
                   Disc = "Description for Task 2",
                   Category = "Senior",
                   Date = "2023-09-21",
                   Task_StatusId = 2,
                   UserId = 2
               },
               new MyTask
               {
                   Id = 3,
                   Title = "Task 3",
                   Disc = "Description for Task 3",
                   Category = "Senior",
                   Date = "2023-09-21",
                   Task_StatusId = 3,
                   UserId = 2
               }
           );
            modelBuilder.Entity<User>().HasData(
                new User()
                {
                    Id = 3,
                    Name = "Ahmed Hosny",
                    RoleId = 1,
                    DepartmentId = 1,
                    JobTitle = "software engineer",
                    /*Profile = new byte[] { 0x00 },
                    Features = new byte[] { 0x00 },*/
                    Image="Images/me"
                },
                new User()
                {
                    Id = 1,
                    Name = "Ali Mohamed",
                    /* Profile = new byte[] { 0x01, 0x02, 0x03, 0x04 },
                     Features = new byte[] { 0x05, 0x06, 0x07, 0x08 },*/
                    Image = "Images/ahmed",
                    RoleId = 2,
                    DepartmentId = 3,
                    JobTitle = "Frontend Developer"
                },
                new User()
                {
                    Id = 2,
                    Name = "Moaz Ahmed",
                    /*Profile = new byte[] { 0x01, 0x02, 0x03, 0x04 },
                    Features = new byte[] { 0x05, 0x06, 0x07, 0x08 },*/
                    Image = "Images/hosny",
                    RoleId = 1,
                    DepartmentId = 2,
                    JobTitle = "Backend Developer"
                }
            );
            modelBuilder.Entity<Attendance>().HasData(
                new Attendance
                {
                    Id = 1,
                    Date= "05/1/2023",
                    UserId = 1
                },
                new Attendance
                {
                    Id = 2,
                    Date = "01/5/2023",
                    UserId = 2
                },
               new Attendance
               {
                   Id = 3,
                   Date = "02/4/2023",
                   UserId = 1
               }
            );
        }
    }
}
