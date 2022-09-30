using System.Text.Json.Serialization;
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

    services.AddCors(options =>
    {
        options.AddPolicy(name: "EWalletCorsPolicy",
            policy =>
            {
                policy.WithOrigins("http://localhost:3000")
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials();
            });
    });

    services.AddControllers()
        .AddJsonOptions(x =>
        {
            // serialize enums as strings in api responses (e.g. Role)
            x.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
        });

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
    app.UseCors("EWalletCorsPolicy");

    // Auth middlewares
    app.UseAuthentication();
    app.UseAuthorization();

    app.MapControllers();
}

app.Run();
