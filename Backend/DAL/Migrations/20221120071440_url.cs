using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DAL.Migrations
{
    public partial class url : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Img",
                table: "Camps");

            migrationBuilder.AddColumn<string>(
                name: "Url",
                table: "Camps",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Url",
                table: "Camps");

            migrationBuilder.AddColumn<byte[]>(
                name: "Img",
                table: "Camps",
                type: "varbinary(max)",
                nullable: true);
        }
    }
}
