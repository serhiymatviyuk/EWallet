using EWallet.Domain.Enums;
using System.Text.Json.Serialization;

namespace EWallet.Domain.Entities
{
    public class Card : BaseEntity
    {
        public string CardNumber { get; set; }

        public bool IsValid { get; set; }

        public CardState State { get; set; }

        public CardType Type { get; set; }

        public CurrencyType? Currency { get; set; }

        [JsonIgnore]
        public virtual User User { get; set; }
    }
}
