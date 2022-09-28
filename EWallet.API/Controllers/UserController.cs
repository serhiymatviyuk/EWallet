using EWallet.API.Extensions;
using EWallet.Common.Infrastructure;
using EWallet.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace EWallet.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private IAuthService _authService;

        public UserController(IAuthService authService)
        {
            _authService = authService;
        }
    }
}
