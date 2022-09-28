using EWallet.Common;
using System.Security.Claims;

namespace EWallet.API.Extensions
{
    public static class ClaimsExtensions
    {
        public static string GetUserId(this ClaimsPrincipal user)
        {
            var foundId = user.Claims.FirstOrDefault(x => x.Type == CustomClaims.UserId);
            return foundId?.Value;
        }

        public static string GetUserName(this ClaimsPrincipal user)
        {
            var foundName = user.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Name);
            return foundName?.Value;
        }
    }
}
