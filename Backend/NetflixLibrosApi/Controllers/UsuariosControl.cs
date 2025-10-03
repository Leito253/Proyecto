using Microsoft.AspNetCore.Mvc;
using NetflixLibrosAPI.Data;
using NetflixLibrosAPI.Modelos;
using Microsoft.EntityFrameworkCore;

namespace NetflixLibrosAPI.Controladores;

[ApiController]
[Route("api/[controller]")]
public class CategoriasController : ControllerBase
{
    private readonly NetflixLibrosContext _context;

    public CategoriasController(NetflixLibrosContext context)
    {
        _context = context;
    }

    // Devuelve todas las categorías
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Categoria>>> ObtenerCategorias()
    {
        return Ok(await _context.Categorias.ToListAsync());
    }

    // Devuelve libros de una categoría específica
    [HttpGet("{id}/libros")]
    public async Task<ActionResult<IEnumerable<Libro>>> ObtenerLibrosPorCategoria(int id)
    {
        var libros = await _context.Libros
            .Where(l => l.CategoriaId == id)
            .ToListAsync();

        return Ok(libros);
    }
}
