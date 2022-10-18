using Api.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

string mySqlConnectionStr = builder.Configuration.GetConnectionString("DefaultConnection");
//builder.Services.AddDbContextPool<pintureriaContext>(options => options.UseMySql(mySqlConnectionStr, ServerVersion.AutoDetect(mySqlConnectionStr)));


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(c =>
	{
    	c.AllowAnyHeader();
    	c.AllowAnyMethod();
   		 c.AllowAnyOrigin();
	});

AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true); 
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
