using Microsoft.AspNetCore.Mvc;
using Template_React.Data;

namespace Template_React.Controllers
{
    [Route(template: "")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IUserRepository _repository;
        public AuthController(IUserRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult Hello()
        {
            return Ok("success");
        }
    }
}
