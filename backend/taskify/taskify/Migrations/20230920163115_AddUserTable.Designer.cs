﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using taskify.Data;

#nullable disable

namespace taskify.Migrations
{
    [DbContext(typeof(ApplicationDBContext))]
    [Migration("20230920163115_AddUserTable")]
    partial class AddUserTable
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.11")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("taskify.model.MyTask", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Category")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Date")
                        .IsRequired()
                        .HasMaxLength(80)
                        .HasColumnType("nvarchar(80)");

                    b.Property<string>("Disc")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<int>("TaskStatusId")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Tasks");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Category = "Category 1",
                            Date = "2023-09-20",
                            Disc = "Description for Task 1",
                            TaskStatusId = 1,
                            Title = "Task 1",
                            UserId = 1
                        },
                        new
                        {
                            Id = 2,
                            Category = "Category 2",
                            Date = "2023-09-21",
                            Disc = "Description for Task 2",
                            TaskStatusId = 2,
                            Title = "Task 2",
                            UserId = 2
                        },
                        new
                        {
                            Id = 3,
                            Category = "Category 2",
                            Date = "2023-09-21",
                            Disc = "Description for Task 2",
                            TaskStatusId = 2,
                            Title = "Task 2",
                            UserId = 2
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
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<byte[]>("Profile")
                        .IsRequired()
                        .HasColumnType("varbinary(max)");

                    b.Property<int>("RoleId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            Id = 3,
                            DepartmentId = 1,
                            Features = new byte[] { 0 },
                            JobTitle = "software",
                            Name = "ahmed hosny",
                            Profile = new byte[] { 0 },
                            RoleId = 1
                        },
                        new
                        {
                            Id = 1,
                            DepartmentId = 1,
                            Features = new byte[] { 5, 6, 7, 8 },
                            JobTitle = "JobTitle1",
                            Name = "User1",
                            Profile = new byte[] { 1, 2, 3, 4 },
                            RoleId = 1
                        },
                        new
                        {
                            Id = 2,
                            DepartmentId = 2,
                            Features = new byte[] { 5, 6, 7, 8 },
                            JobTitle = "JobTitle2",
                            Name = "User2",
                            Profile = new byte[] { 1, 2, 3, 4 },
                            RoleId = 2
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
