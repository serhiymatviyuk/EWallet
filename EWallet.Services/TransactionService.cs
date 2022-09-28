using EWallet.Common;
using EWallet.Common.Infrastructure;
using EWallet.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace EWallet.Services
{
    public class TransactionService : ITransactionService
    {
        private IEWalletDatabase _database;

        public TransactionService(IEWalletDatabase database)
        {
            _database = database;
        }

        public async Task<int> CreateTransactionAsync(Transaction transaction, string userId)
        {
            var userCard = _database.Cards
                .FirstOrDefault(x => x.CardNumber == transaction.CardNumber && x.User.Id == userId);

            if (userCard == null)
                throw new Exception("Card not found");

            var transactionEntry = await _database.Transactions.AddAsync(transaction);

            await _database.SaveChangesAsync();

            return transactionEntry.Entity.Id;
        }

        public async Task<Transaction> DeleteTransactionAsync(int transactionId)
        {
            var transactionToDelete = await _database.Transactions
                .FirstOrDefaultAsync(x => x.Id == transactionId);

            if (transactionToDelete == null)
                throw new Exception("Transaction not found");

            _database.Transactions.Remove(transactionToDelete);
            await _database.SaveChangesAsync();

            return transactionToDelete;
        }

        public async Task<IEnumerable<Transaction>> GetTransactionsByUserIdAsync(string userId)
        {
            var cardNumbers = await _database.Cards
                .Where(x => x.User.Id == userId)
                .Select(x => x.CardNumber)
                .ToArrayAsync();

            return await _database.Transactions
                .Where(x => cardNumbers.Contains(x.CardNumber))
                .ToListAsync();
        }

        public async Task<Transaction> UpdateTransactionAsync(Transaction transaction)
        {
            var transactionToUpdate = await _database.Transactions
                .Include(x => x.Vendor)
                .FirstOrDefaultAsync(x => x.Id == transaction.Id);

            if (transactionToUpdate == null)
                throw new Exception("Transaction not found");

            var vendorToUpdate = await _database.Vendors
                .FirstOrDefaultAsync(x => x.Id == transaction.Vendor.Id);

            if (vendorToUpdate == null)
                throw new Exception("Transaction vendor invalid");

            transactionToUpdate.CardNumber = transaction.CardNumber;

            transactionToUpdate.Date = transaction.Date;
            transactionToUpdate.Amount = transaction.Amount;

            vendorToUpdate.Name = transaction.Vendor.Name;
            vendorToUpdate.Address = transaction.Vendor.Address;
            vendorToUpdate.Contacts = transaction.Vendor.Contacts;

            _database.Transactions.Update(transactionToUpdate);
            _database.Vendors.Update(vendorToUpdate);

            await _database.SaveChangesAsync();

            transactionToUpdate.Vendor = vendorToUpdate;

            return transactionToUpdate;
        }
    }
}
