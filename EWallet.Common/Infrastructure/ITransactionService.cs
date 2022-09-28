using EWallet.Domain.Entities;

namespace EWallet.Common.Infrastructure
{
    public interface ITransactionService
    {
        Task<IEnumerable<Transaction>> GetTransactionsByUserIdAsync(string userId);

        Task<int> CreateTransactionAsync(Transaction transaction, string userId);

        Task<Transaction> UpdateTransactionAsync(Transaction transaction);

        Task<Transaction> DeleteTransactionAsync(int transactionId);
    }
}
