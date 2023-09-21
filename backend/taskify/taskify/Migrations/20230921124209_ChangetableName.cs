using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace taskify.Migrations
{
    /// <inheritdoc />
    public partial class ChangetableName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tasks_TaskStatus_Task_StatusId",
                table: "Tasks");

            migrationBuilder.DropPrimaryKey(
                name: "PK_TaskStatus",
                table: "TaskStatus");

            migrationBuilder.RenameTable(
                name: "TaskStatus",
                newName: "Task_Status");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Task_Status",
                table: "Task_Status",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Tasks_Task_Status_Task_StatusId",
                table: "Tasks",
                column: "Task_StatusId",
                principalTable: "Task_Status",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tasks_Task_Status_Task_StatusId",
                table: "Tasks");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Task_Status",
                table: "Task_Status");

            migrationBuilder.RenameTable(
                name: "Task_Status",
                newName: "TaskStatus");

            migrationBuilder.AddPrimaryKey(
                name: "PK_TaskStatus",
                table: "TaskStatus",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Tasks_TaskStatus_Task_StatusId",
                table: "Tasks",
                column: "Task_StatusId",
                principalTable: "TaskStatus",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
