using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class realizations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0726fa64-8bad-4621-a9a2-719b3c1b5e82");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a4729537-760e-4332-be60-c3271be0785c");

            migrationBuilder.CreateTable(
                name: "Realizations",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Date = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    HabitId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Realizations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Realizations_Habits_HabitId",
                        column: x => x.HabitId,
                        principalTable: "Habits",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "58094cc8-83dc-4fd1-a09f-b9c4583f5e20", null, "Admin", "ADMIN" },
                    { "b6deaee3-dd18-4f09-84e3-76cd055c7580", null, "User", "USER" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Realizations_HabitId",
                table: "Realizations",
                column: "HabitId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Realizations");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "58094cc8-83dc-4fd1-a09f-b9c4583f5e20");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b6deaee3-dd18-4f09-84e3-76cd055c7580");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0726fa64-8bad-4621-a9a2-719b3c1b5e82", null, "User", "USER" },
                    { "a4729537-760e-4332-be60-c3271be0785c", null, "Admin", "ADMIN" }
                });
        }
    }
}
