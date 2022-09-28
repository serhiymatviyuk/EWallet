using EWallet.Common;
using EWallet.Common.Infrastructure;
using EWallet.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace EWallet.Services
{
    public class AccountService : IAccountService
    {
        private IEWalletDatabase _database;

        public AccountService(IEWalletDatabase database)
        {
            _database = database;
        }

        public async Task<int> CreateAccountAsync(Account account, string userId)
        {
            var user = await _database.Users.FirstOrDefaultAsync(x => x.Id == userId);

            if (user == null)
                throw new Exception("User not found");

            account.User = user;
            var accountEntry = await _database.Accounts.AddAsync(account);
            await _database.SaveChangesAsync();

            return accountEntry.Entity.Id;
        }

        public async Task<int> DeleteAccountAsync(int accountId, string userId)
        {
            var accountToDelete = await _database.Accounts.FirstOrDefaultAsync(x => x.Id == accountId && x.User.Id == userId);

            if (accountToDelete == null)
                throw new Exception("Account was not found");

            var entry = _database.Accounts.Remove(accountToDelete);
            await _database.SaveChangesAsync();

            return entry.Entity.Id;
        }

        public async Task<IEnumerable<Account>> GetAccountsByUserIdAsync(string userId)
        {
            return await _database.Accounts
                .Include(x => x.User)
                .Where(x => x.User.Id == userId)
                .ToListAsync();
        }

        public async Task<Account> UpdateAccountAsync(Account account, string userId)
        {
            var accountToUpdate = await _database.Accounts.FirstOrDefaultAsync(x => x.Id == account.Id && x.User.Id == userId);

            if (accountToUpdate == null)
                throw new Exception("Account was not found");

            accountToUpdate.AccountType = account.AccountType;
            accountToUpdate.Balance = account.Balance;

            var accountEntry = _database.Accounts.Update(accountToUpdate);
            await _database.SaveChangesAsync();

            return accountEntry.Entity;
        }
    }
}
