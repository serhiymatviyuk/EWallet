using EWallet.Common;
using EWallet.Common.Infrastructure;
using EWallet.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace EWallet.Services
{
    public class CardService : ICardService
    {
        private IEWalletDatabase _database;

        public CardService(IEWalletDatabase database)
        {
            _database = database;
        }

        public Task<Card> GetCardByIdAsync(int cardId)
        {
            return _database.Cards.FirstOrDefaultAsync(x => x.Id == cardId);
        }

        public async Task<IEnumerable<Card>> GetCardsByUserIdAsync(string userId)
        {
            return await _database.Cards
                .Include(x => x.User)
                .Where(x => x.User.Id == userId)
                .ToListAsync();
        }

        public async Task<int> RegisterCardAsync(Card card, string userId)
        {
            var user = await _database.Users.FirstOrDefaultAsync(x => x.Id == userId);

            if (user == null)
            {
                throw new Exception("User not found");
            }

            card.User = user;

            var entry = await _database.Cards.AddAsync(card);
            await _database.SaveChangesAsync();

            return entry.Entity.Id;
        }

        public async Task<Card> UpdateCardAsync(Card card, string userId)
        {
            var cardToUpdate = await _database.Cards.FirstOrDefaultAsync(x => x.Id == card.Id && x.User.Id == userId);

            if (cardToUpdate == null)
            {
                throw new Exception("Card was not found for current user");
            }

            cardToUpdate.CardNumber = card.CardNumber;
            cardToUpdate.IsValid = card.IsValid;
            cardToUpdate.State = card.State;
            cardToUpdate.Type = card.Type;
            cardToUpdate.Currency = card.Currency;

            var entry = _database.Cards.Update(cardToUpdate);
            await _database.SaveChangesAsync();

            return entry.Entity;
        }

        public async Task<int> DeleteCardAsync(int cardId, string userId)
        {
            var cardToDelete = await _database.Cards.FirstOrDefaultAsync(x => x.Id == cardId && x.User.Id == userId);

            if (cardToDelete == null)
            {
                throw new Exception("Card was not found");
            }

            var entry = _database.Cards.Remove(cardToDelete);
            await _database.SaveChangesAsync();

            return entry.Entity.Id;
        }
    }
}
