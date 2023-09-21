using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace taskify.Migrations
{
    /// <inheritdoc />
    public partial class AddAllTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Attendance",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<string>(type: "nvarchar(80)", maxLength: 80, nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Attendance", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Department",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Department", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tasks",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Disc = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    Category = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Date = table.Column<string>(type: "nvarchar(80)", maxLength: 80, nullable: false),
                    TaskStatusId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tasks", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    Profile = table.Column<byte[]>(type: "varbinary(max)", nullable: false),
                    Features = table.Column<byte[]>(type: "varbinary(max)", nullable: false),
                    RoleId = table.Column<int>(type: "int", nullable: false),
                    DepartmentId = table.Column<int>(type: "int", nullable: false),
                    JobTitle = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Attendance",
                columns: new[] { "Id", "Date", "UserId" },
                values: new object[,]
                {
                    { 1, "2023-05-01", 1 },
                    { 2, "2023-05-01", 2 },
                    { 3, "2023-05-01", 1 }
                });

            migrationBuilder.InsertData(
                table: "Department",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "a h" },
                    { 2, "h" },
                    { 3, "a" }
                });

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "ahmed hosny" },
                    { 2, "hosny" },
                    { 3, "ahmed" }
                });

            migrationBuilder.InsertData(
                table: "Tasks",
                columns: new[] { "Id", "Category", "Date", "Disc", "TaskStatusId", "Title", "UserId" },
                values: new object[,]
                {
                    { 1, "Category 1", "2023-09-20", "Description for Task 1", 1, "Task 1", 1 },
                    { 2, "Category 2", "2023-09-21", "Description for Task 2", 2, "Task 2", 2 },
                    { 3, "Category 2", "2023-09-21", "Description for Task 2", 2, "Task 2", 2 }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "DepartmentId", "Features", "JobTitle", "Name", "Profile", "RoleId" },
                values: new object[,]
                {
                    { 1, 1, new byte[] { 5, 6, 7, 8 }, "JobTitle1", "User1", new byte[] { 1, 2, 3, 4 }, 1 },
                    { 2, 2, new byte[] { 5, 6, 7, 8 }, "JobTitle2", "User2", new byte[] { 1, 2, 3, 4 }, 2 },
                    { 3, 1, new byte[] { 0 }, "software", "ahmed hosny", new byte[] { 0 }, 1 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Attendance");

            migrationBuilder.DropTable(
                name: "Department");

            migrationBuilder.DropTable(
                name: "Roles");

            migrationBuilder.DropTable(
                name: "Tasks");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
