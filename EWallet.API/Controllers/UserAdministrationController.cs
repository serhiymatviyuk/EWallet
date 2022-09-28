using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EWallet.API.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/administration/users")]
    public class UserAdministrationController
    {

    }
}
