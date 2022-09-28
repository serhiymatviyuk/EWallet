using EWallet.API.Extensions;
using EWallet.Common;
using EWallet.Common.Constants;
using EWallet.Common.Infrastructure;
using EWallet.Database;
using EWallet.Services;
using Microsoft.EntityFrameworkCore;

var devCorsPolicy = "devCorsPolicy";

var builder = WebApplication.CreateBuilder(args);
{
    // Add services to the container.
    var services = builder.Services;
  
    services.AddCors();

    services.AddControllers();

    // App settings
    services.Configure<AppSettings>(builder.Configuration.GetSection(AppConsts.AppSettingsName));
    services.Configure<JwtConfig>(builder.Configuration.GetSection(AppConsts.JwtConfigName));

    // DI for services and DB
    string connectionString = builder.Configuration.GetConnectionString(AppConsts.DbConnectionStringName);
    services.AddDbContext<EWalletContext>(x => x.UseNpgsql(connectionString));

    services.AddAuthentication();
    services.ConfigureIdentity();
    services.ConfigureJWT(builder.Configuration);

    services.ConfigureApplicationServices();
}

var app = builder.Build();

// Configure the HTTP request pipeline.
{
    app.UseCors(x => x
                .AllowAnyMethod()
                .AllowAnyHeader()
                .SetIsOriginAllowed(origin => true) // allow any origin
                .AllowCredentials()); // allow credentials

    // Auth middlewares
    app.UseAuthentication();
    app.UseAuthorization();

    app.MapControllers();
}

app.Run();
