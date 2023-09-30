using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace taskify.Migrations
{
    /// <inheritdoc />
    public partial class Changetable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Features",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Profile",
                table: "Users");

            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                column: "Image",
                value: "Images/ahmed");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                column: "Image",
                value: "Images/hosny");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3,
                column: "Image",
                value: "Images/me");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "Users");

            migrationBuilder.AddColumn<byte[]>(
                name: "Features",
                table: "Users",
                type: "varbinary(max)",
                nullable: false,
                defaultValue: new byte[0]);

            migrationBuilder.AddColumn<byte[]>(
                name: "Profile",
                table: "Users",
                type: "varbinary(max)",
                nullable: false,
                defaultValue: new byte[0]);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Features", "Profile" },
                values: new object[] { new byte[] { 5, 6, 7, 8 }, new byte[] { 1, 2, 3, 4 } });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Features", "Profile" },
                values: new object[] { new byte[] { 5, 6, 7, 8 }, new byte[] { 1, 2, 3, 4 } });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Features", "Profile" },
                values: new object[] { new byte[] { 0 }, new byte[] { 0 } });
        }
    }
}
