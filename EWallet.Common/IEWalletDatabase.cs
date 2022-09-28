using EWallet.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace EWallet.Common
{
    public interface IEWalletDatabase
    {
        public DbSet<User> Users { get; set; }

        public DbSet<Account> Accounts { get; set; }

        public DbSet<Card> Cards { get; set; }

        public DbSet<Transaction> Transactions { get; set; }

        public DbSet<Vendor> Vendors { get; set; }

        Task<int> SaveChangesAsync();
    }
}
