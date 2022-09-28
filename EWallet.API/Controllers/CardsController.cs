using EWallet.API.Extensions;
using EWallet.Common.Infrastructure;
using EWallet.Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EWallet.API.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class CardsController : ControllerBase
    {
        private ICardService _cardService;

        public CardsController(ICardService cardService)
        {
            _cardService = cardService;
        }

        [HttpGet]
        public async Task<IActionResult> GetCardsAsync()
        {
            IEnumerable<Card> cards = await _cardService.GetCardsByUserIdAsync(User.GetUserId());

            return Ok(cards);
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterCardAsync([FromBody] Card card)
        {
            card.Id = await _cardService.RegisterCardAsync(card, User.GetUserId());

            return Ok(card);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateCardAsync([FromBody] Card card)
        {
            card = await _cardService.UpdateCardAsync(card, User.GetUserId());

            return Ok(card);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteCardAsync([FromBody] int cardId)
        {
            return Ok(await _cardService.DeleteCardAsync(cardId, User.GetUserId()));
        }
    }
}
