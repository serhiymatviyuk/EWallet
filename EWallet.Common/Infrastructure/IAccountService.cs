using EWallet.Domain.Entities;

namespace EWallet.Common.Infrastructure
{
    public interface IAccountService
    {
        Task<IEnumerable<Account>> GetAccountsByUserIdAsync(string userId);

        Task<int> CreateAccountAsync(Account account, string userId);

        Task<Account> UpdateAccountAsync(Account account, string userId);

        Task<int> DeleteAccountAsync(int accountId, string userId);
    }
}
