﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using taskify.Data;

#nullable disable

namespace taskify.Migrations
{
    [DbContext(typeof(ApplicationDBContext))]
    partial class ApplicationDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.11")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("taskify.model.Attendance", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Date")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Attendance");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Date = "2023-05-01",
                            UserId = 1
                        },
                        new
                        {
                            Id = 2,
                            Date = "2023-05-01",
                            UserId = 2
                        },
                        new
                        {
                            Id = 3,
                            Date = "2023-05-02",
                            UserId = 1
                        });
                });

            modelBuilder.Entity("taskify.model.Department", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Department");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "Application"
                        },
                        new
                        {
                            Id = 2,
                            Name = "IT"
                        },
                        new
                        {
                            Id = 3,
                            Name = "Hard Disk"
                        },
                        new
                        {
                            Id = 4,
                            Name = "AI"
                        });
                });

            modelBuilder.Entity("taskify.model.MyTask", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Category")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Date")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Disc")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Task_StatusId")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("Task_StatusId");

                    b.HasIndex("UserId");

                    b.ToTable("Tasks");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Category = "Junior",
                            Date = "2023-09-20",
                            Disc = "Description for Task 1",
                            Task_StatusId = 1,
                            Title = "Task 1",
                            UserId = 1
                        },
                        new
                        {
                            Id = 2,
                            Category = "Senior",
                            Date = "2023-09-21",
                            Disc = "Description for Task 2",
                            Task_StatusId = 2,
                            Title = "Task 2",
                            UserId = 2
                        },
                        new
                        {
                            Id = 3,
                            Category = "Senior",
                            Date = "2023-09-21",
                            Disc = "Description for Task 3",
                            Task_StatusId = 3,
                            Title = "Task 3",
                            UserId = 2
                        });
                });

            modelBuilder.Entity("taskify.model.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Roles");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "User"
                        },
                        new
                        {
                            Id = 2,
                            Name = "Admin"
                        });
                });

            modelBuilder.Entity("taskify.model.Task_Status", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Task_Status");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "ToDo"
                        },
                        new
                        {
                            Id = 2,
                            Name = "InProgress"
                        },
                        new
                        {
                            Id = 3,
                            Name = "Done"
                        });
                });

            modelBuilder.Entity("taskify.model.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("DepartmentId")
                        .HasColumnType("int");

                    b.Property<byte[]>("Features")
                        .IsRequired()
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("JobTitle")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte[]>("Profile")
                        .IsRequired()
                        .HasColumnType("varbinary(max)");

                    b.Property<int>("RoleId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("DepartmentId");

                    b.HasIndex("RoleId");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            Id = 3,
                            DepartmentId = 1,
                            Features = new byte[] { 0 },
                            JobTitle = "software engineer",
                            Name = "Ahmed Hosny",
                            Profile = new byte[] { 0 },
                            RoleId = 1
                        },
                        new
                        {
                            Id = 1,
                            DepartmentId = 3,
                            Features = new byte[] { 5, 6, 7, 8 },
                            JobTitle = "Frontend Developer",
                            Name = "Ali Mohamed",
                            Profile = new byte[] { 1, 2, 3, 4 },
                            RoleId = 2
                        },
                        new
                        {
                            Id = 2,
                            DepartmentId = 2,
                            Features = new byte[] { 5, 6, 7, 8 },
                            JobTitle = "Backend Developer",
                            Name = "Moaz Ahmed",
                            Profile = new byte[] { 1, 2, 3, 4 },
                            RoleId = 1
                        });
                });

            modelBuilder.Entity("taskify.model.Attendance", b =>
                {
                    b.HasOne("taskify.model.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("taskify.model.MyTask", b =>
                {
                    b.HasOne("taskify.model.Task_Status", "Task_Status")
                        .WithMany()
                        .HasForeignKey("Task_StatusId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("taskify.model.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Task_Status");

                    b.Navigation("User");
                });

            modelBuilder.Entity("taskify.model.User", b =>
                {
                    b.HasOne("taskify.model.Department", "Department")
                        .WithMany()
                        .HasForeignKey("DepartmentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("taskify.model.Role", "Role")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Department");

                    b.Navigation("Role");
                });
#pragma warning restore 612, 618
        }
    }
}
