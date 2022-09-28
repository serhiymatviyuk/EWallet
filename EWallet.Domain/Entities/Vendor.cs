namespace EWallet.Domain.Entities
{
    public class Vendor : BaseEntity
    {
        public string Name { get; set; }

        public string Address { get; set; }

        public string Contacts { get; set; }
    }
}
