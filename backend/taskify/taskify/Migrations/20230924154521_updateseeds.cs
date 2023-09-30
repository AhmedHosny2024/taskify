using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace taskify.Migrations
{
    /// <inheritdoc />
    public partial class updateseeds : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Attendance",
                keyColumn: "Id",
                keyValue: 1,
                column: "Date",
                value: "05/1/2023");

            migrationBuilder.UpdateData(
                table: "Attendance",
                keyColumn: "Id",
                keyValue: 2,
                column: "Date",
                value: "01/5/2023");

            migrationBuilder.UpdateData(
                table: "Attendance",
                keyColumn: "Id",
                keyValue: 3,
                column: "Date",
                value: "02/4/2023");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Attendance",
                keyColumn: "Id",
                keyValue: 1,
                column: "Date",
                value: "2023-05-01");

            migrationBuilder.UpdateData(
                table: "Attendance",
                keyColumn: "Id",
                keyValue: 2,
                column: "Date",
                value: "2023-05-01");

            migrationBuilder.UpdateData(
                table: "Attendance",
                keyColumn: "Id",
                keyValue: 3,
                column: "Date",
                value: "2023-05-02");
        }
    }
}
