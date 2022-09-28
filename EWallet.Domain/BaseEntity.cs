using System.ComponentModel.DataAnnotations;

namespace EWallet.Domain
{
    public abstract class BaseEntity
    {
        public int Id { get; set; }
    }
}
