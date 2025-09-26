using Microsoft.EntityFrameworkCore;
using NetflixLibrosAPI.Data;
using Microsoft.Extensions.FileProviders;
using System.IO;

var builder = WebApplication.CreateBuilder(args);

// 🚀 Registrar DbContext con MySQL
builder.Services.AddDbContext<NetflixLibrosContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
        new MySqlServerVersion(new Version(8, 0, 29))
    )
);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// 🔹 Habilitar CORS para React
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact", policy =>
    {
        policy.WithOrigins("http://localhost:3000")
                .AllowAnyHeader()
                .AllowAnyMethod();
    });
});

var app = builder.Build();

// Swagger
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Archivos estáticos (para imágenes/PDFs en wwwroot)
app.UseStaticFiles();

app.UseHttpsRedirection();

// 🔹 Aplicar CORS
app.UseCors("AllowReact");

app.UseAuthorization();

app.MapControllers();

app.Run();
