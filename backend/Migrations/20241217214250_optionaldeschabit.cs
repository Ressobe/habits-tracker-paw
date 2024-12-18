using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class optionaldeschabit : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "aea246ce-cdfc-4bf3-9b15-0f30e8b9d704");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "dd11e176-a0fa-43e6-8a97-d19e827171d8");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "63f796ab-0140-4b73-b5d2-e5254b328c3f", null, "Admin", "ADMIN" },
                    { "e348d04f-f831-4865-84a7-7094b93ea98d", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "63f796ab-0140-4b73-b5d2-e5254b328c3f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e348d04f-f831-4865-84a7-7094b93ea98d");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "aea246ce-cdfc-4bf3-9b15-0f30e8b9d704", null, "Admin", "ADMIN" },
                    { "dd11e176-a0fa-43e6-8a97-d19e827171d8", null, "User", "USER" }
                });
        }
    }
}
