namespace EWallet.Domain.Entities
{
    public class Transaction : BaseEntity
    {
        public DateTime Date { get; set; }

        public Decimal Amount { get; set; }

        public string CardNumber { get; set; }

        public virtual Vendor Vendor { get; set; }
    }
}
