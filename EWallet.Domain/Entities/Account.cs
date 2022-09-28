using EWallet.Domain.Enums;
using System.Text.Json.Serialization;

namespace EWallet.Domain.Entities
{
    public class Account : BaseEntity
    {
        public Decimal Balance { get; set; }

        public AccountType AccountType { get; set; }

        public virtual User User { get; set; }
    }
}
