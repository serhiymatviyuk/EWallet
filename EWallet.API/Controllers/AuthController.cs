using EWallet.Common.Models;
using EWallet.Common.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using EWallet.API.Extensions;
using Microsoft.AspNetCore.Cors;

namespace EWallet.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("token")]
        public async Task<IActionResult> Authenticate(AuthenticationRequest model)
        {
            var response = await _authService.ValidateUserAsync(model);

            if (!response)
                return BadRequest(new { message = "User not found or invalid credentials." });

            return Ok(new
            {
                Token = await _authService.CreateTokenAsync(model)
            });
        }

        [HttpPost("change-password")]
        public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordRequest model)
        {
            var token = await _authService.ChangePasswordAsync(model, User.GetUserId());

            return Ok(new
            {
                Token = token
            });
        }
    }
}
