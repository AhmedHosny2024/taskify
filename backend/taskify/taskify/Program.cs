using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.FileProviders;
using taskify.Data;

var builder = WebApplication.CreateBuilder(args);

// add databse
builder.Services.AddDbContext<ApplicationDBContext>(option =>
{
    option.UseSqlServer(builder.Configuration.GetConnectionString("DefaultSQLConnection"));
});

// Add services to the container.

builder.Services.AddControllers().AddNewtonsoftJson();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
////////////////
builder.Services.AddHttpClient();
var CORigin = "CorsPolicy";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: CORigin,
        policy =>
        {
            /*policy.AllowAnyOrigin();*/
            policy.WithOrigins("http://localhost:3000") // Replace with your frontend origin
                  .AllowAnyHeader()
                  .AllowAnyMethod()
                  .AllowCredentials(); // Allow credentials in the request
        });
});

///

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

///////////////
app.UseStaticFiles();
/*app.UseStaticFiles(new StaticFileOptions()
{
    FileProvider = new PhysicalFileProvider
  (Path.Combine(Directory.GetCurrentDirectory(), "/")),
    RequestPath = "/StaticFiles"
});*/
///////////////

//app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers(); ;
app.UseCors(CORigin);
app.Run();
