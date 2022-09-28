using EWallet.Common;
using EWallet.Common.Constants;
using EWallet.Database.Extensions;
using EWallet.Domain.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Reflection;

namespace EWallet.Database
{
    public class EWalletContext : IdentityDbContext<User>, IEWalletDatabase
    {
        protected readonly IConfiguration _configuration;

        public EWalletContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        #region DbSets

        public DbSet<Account> Accounts { get; set; }

        public DbSet<Card> Cards { get; set; }

        public DbSet<Transaction> Transactions { get; set; }

        public DbSet<Vendor> Vendors { get; set; }

        #endregion

        public Task<int> SaveChangesAsync()
        {
            return SaveChangesAsync();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(_configuration.GetConnectionString(AppConsts.DbConnectionStringName));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            modelBuilder.SeedDefaultUser();
        }
    }
}
