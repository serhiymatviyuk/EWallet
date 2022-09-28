using EWallet.API.Extensions;
using EWallet.Common.Infrastructure;
using EWallet.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace EWallet.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransactionController : ControllerBase
    {
        private ITransactionService _transactionService;

        public TransactionController(ITransactionService transactionService)
        {
            _transactionService = transactionService;
        }

        [HttpGet]
        public async Task<IActionResult> GetCardsAsync()
        {
            return Ok(await _transactionService.GetTransactionsByUserIdAsync(User.GetUserId()));
        }

        [HttpPost()]
        public async Task<IActionResult> CreateTransactionAsync([FromBody] Transaction transaction)
        {
            return Ok(await _transactionService.CreateTransactionAsync(transaction, User.GetUserId()));
        }

        [HttpPut]
        public async Task<IActionResult> UpdateCardAsync([FromBody] Transaction transaction)
        {
            var result = await _transactionService.UpdateTransactionAsync(transaction);

            return Ok(result);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteCardAsync([FromBody] int transactionId)
        {
            return Ok(await _transactionService.DeleteTransactionAsync(transactionId));
        }
    }
}
