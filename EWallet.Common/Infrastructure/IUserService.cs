using EWallet.Domain.Entities;

namespace EWallet.Common.Infrastructure
{
    public interface IUserService
    {
        IEnumerable<User> GetUsers();
    }
}
