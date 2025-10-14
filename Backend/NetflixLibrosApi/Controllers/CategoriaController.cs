using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NetflixLibrosApi.Data;
using NetflixLibrosApi.Modelos;

namespace NetflixLibrosApi.Controladores;

[Route("[controller]")]
public class CategoriaControl : Controller
{
    private readonly ILogger<CategoriaControl> _logger;

    public CategoriaControl(ILogger<CategoriaControl> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View("Error!");
    }
}
