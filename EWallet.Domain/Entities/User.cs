using Microsoft.AspNetCore.Identity;

namespace EWallet.Domain.Entities
{
    public class User : IdentityUser
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime? LastLogin { get; set; }

        public DateTime? PasswordChangeDate { get; set; }

        public virtual ICollection<Account> Accounts { get; set; }

        public virtual ICollection<Card> Cards { get; set; }
    }
}
