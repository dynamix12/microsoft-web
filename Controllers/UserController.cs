using Microsoft.AspNetCore.Mvc;

namespace _46363z.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{

    private readonly ILogger<UserController> _logger;

    public UserController(ILogger<UserController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<User> Get()
    {
        return Enumerable.Range(1, 1).Select(index => new User
        {
            Name = "User Name Test",
            Email = "test@mail.com"
        });
        
    }
}
