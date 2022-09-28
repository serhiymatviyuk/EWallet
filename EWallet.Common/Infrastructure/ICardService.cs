using EWallet.Domain.Entities;

namespace EWallet.Common.Infrastructure
{
    public interface ICardService
    {
        Task<IEnumerable<Card>> GetCardsByUserIdAsync(string userId);

        Task<Card> GetCardByIdAsync(int cardId);

        Task<int> RegisterCardAsync(Card card, string userId);

        Task<Card> UpdateCardAsync(Card card, string userId);

        Task<int> DeleteCardAsync(int cardId, string userId);
    }
}
