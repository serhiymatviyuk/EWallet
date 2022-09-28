using EWallet.API.Extensions;
using EWallet.Common.Infrastructure;
using EWallet.Domain.Entities;
using EWallet.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EWallet.API.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class AccountsController : ControllerBase
    {
        private IAccountService _accountService;

        public AccountsController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpGet]
        public async Task<IActionResult> GetUserAccountsAsync()
        {
            return Ok(await _accountService.GetAccountsByUserIdAsync(User.GetUserId()));
        }

        [HttpPost]
        public async Task<IActionResult> CreateAccountAsync([FromBody] Account account)
        {
            account.Id = await _accountService.CreateAccountAsync(account, User.GetUserId());

            return Ok(account);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateAccountAsync([FromBody] Account card)
        {
            return Ok(await _accountService.UpdateAccountAsync(card, User.GetUserId()));
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteAccountAsync([FromBody] int card)
        {
            return Ok(await _accountService.DeleteAccountAsync(card, User.GetUserId()));
        }
    }
}
