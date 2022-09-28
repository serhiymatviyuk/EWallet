using EWallet.Common.Models;

namespace EWallet.Common.Infrastructure
{
    public interface IAuthService
    {
        Task<bool> ValidateUserAsync(AuthenticationRequest credentials);

        Task<string> CreateTokenAsync(AuthenticationRequest credentials);

        Task<string> ChangePasswordAsync(ChangePasswordRequest credentials, string userId);

    }
}
