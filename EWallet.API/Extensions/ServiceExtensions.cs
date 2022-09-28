using EWallet.Common;
using EWallet.Common.Infrastructure;
using EWallet.Database;
using EWallet.Services;

namespace EWallet.API.Extensions
{
    public static class ServiceExtensions
    {
        public static void ConfigureApplicationServices(this IServiceCollection services)
        {
            services.AddScoped<IEWalletDatabase, EWalletContext>();
            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<ICardService, CardService>();
            services.AddScoped<ITransactionService, TransactionService>();
        }
    }
}
