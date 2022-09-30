using EWallet.Common;
using EWallet.Common.Infrastructure;
using EWallet.Common.Models;
using EWallet.Domain.Entities;
using EWallet.Domain.Enums;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace EWallet.Services
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<User> _userManager;
        private readonly JwtConfig _jwtSettings;

        public AuthService(UserManager<User> userManager, IOptions<JwtConfig> jwtSettings)
        {
            _jwtSettings = jwtSettings.Value;
            _userManager = userManager;
        }

        public async Task<bool> ValidateUserAsync(AuthenticationRequest credentials)
        {
            var user = await _userManager.FindByNameAsync(credentials.Username);

            var result = user != null && await _userManager.CheckPasswordAsync(user, credentials.Password);

            return result;
        }

        public async Task<string> CreateTokenAsync(AuthenticationRequest credentials)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            User user = await _userManager.FindByNameAsync(credentials.Username);

            var signingCredentials = GetSigningCredentials();

            var claims = await GetClaims(user);

            var tokenOptions = GenerateTokenOptions(signingCredentials, claims);

            await UpdateLoginDateAsync(user);

            return tokenHandler.WriteToken(tokenOptions);
        }

        public async Task<string> ChangePasswordAsync(ChangePasswordRequest changeRequest, string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);

            if (user == null)
                throw new Exception("User not found");

            var result = await _userManager.ChangePasswordAsync(user, changeRequest.Password, changeRequest.NewPassword);

            if (!result.Succeeded)
                throw new Exception("Can't change password");

            return await CreateTokenAsync(user, changeRequest.NewPassword);
        }

        private Task<string> CreateTokenAsync(User user, string password)
        {
            var request = new AuthenticationRequest()
            {
                Username = user.UserName,
                Password = password
            };

            return CreateTokenAsync(request);
        }

        private SigningCredentials GetSigningCredentials()
        {
            var key = Encoding.UTF8.GetBytes(_jwtSettings.Key);
            var secret = new SymmetricSecurityKey(key);
            return new SigningCredentials(secret, SecurityAlgorithms.HmacSha256);
        }

        private async Task<List<Claim>> GetClaims(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(CustomClaims.UserId, user.Id),
                new Claim(CustomClaims.FirstName, user.FirstName),
                new Claim(CustomClaims.LastName, user.LastName),
                new Claim(CustomClaims.Email, user.UserName),
            };

            var isAdmin = await _userManager.IsInRoleAsync(user, nameof(UserRole.Admin));
            if (isAdmin)
            {
                claims.Add(new Claim(CustomClaims.UserRole, nameof(UserRole.Admin)));
            }
            else
            {
                claims.Add(new Claim(CustomClaims.UserRole, nameof(UserRole.User)));
            }

            return claims;
        }

        private JwtSecurityToken GenerateTokenOptions(SigningCredentials signingCredentials, List<Claim> claims)
        {
            var tokenOptions = new JwtSecurityToken(
                issuer: _jwtSettings.Issuer,
                audience: _jwtSettings.Audience,
                claims: claims,
                expires: DateTime.UtcNow.AddDays(1),
                signingCredentials: signingCredentials
                );

            return tokenOptions;
        }

        private async Task UpdateLoginDateAsync(User user)
        {
            user.LastLogin = DateTime.UtcNow;
            await _userManager.UpdateAsync(user);
        }
    }
}
