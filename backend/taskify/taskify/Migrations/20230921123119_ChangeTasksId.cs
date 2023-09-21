using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace taskify.Migrations
{
    /// <inheritdoc />
    public partial class ChangeTasksId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tasks_TaskStatus_TaskStatusId",
                table: "Tasks");

            migrationBuilder.RenameColumn(
                name: "TaskStatusId",
                table: "Tasks",
                newName: "Task_StatusId");

            migrationBuilder.RenameIndex(
                name: "IX_Tasks_TaskStatusId",
                table: "Tasks",
                newName: "IX_Tasks_Task_StatusId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tasks_TaskStatus_Task_StatusId",
                table: "Tasks",
                column: "Task_StatusId",
                principalTable: "TaskStatus",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tasks_TaskStatus_Task_StatusId",
                table: "Tasks");

            migrationBuilder.RenameColumn(
                name: "Task_StatusId",
                table: "Tasks",
                newName: "TaskStatusId");

            migrationBuilder.RenameIndex(
                name: "IX_Tasks_Task_StatusId",
                table: "Tasks",
                newName: "IX_Tasks_TaskStatusId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tasks_TaskStatus_TaskStatusId",
                table: "Tasks",
                column: "TaskStatusId",
                principalTable: "TaskStatus",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
