using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NetflixLibrosAPI.Data;
using NetflixLibrosAPI.Modelos;

namespace NetflixLibrosAPI.Controladores;

[ApiController]
[Route("api/[controller]")]
public class LibrosController : ControllerBase
{
    private readonly NetflixLibrosContext _context;

    public LibrosController(NetflixLibrosContext context)
    {
        _context = context;
    }

    // GET /api/Libros
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Libro>>> ObtenerLibros()
    {
        var libros = await _context.Libros.ToListAsync();
        return Ok(libros);
    }

    // GET /api/Libros/{id}
    [HttpGet("{id}")]
    public async Task<ActionResult<Libro>> ObtenerLibro(int id)
    {
        var libro = await _context.Libros.FindAsync(id);
        if (libro == null) return NotFound();
        return Ok(libro);
    }

    // GET /api/Libros/buscar?query=texto
    [HttpGet("buscar")]
    public async Task<IActionResult> Buscar([FromQuery] string query)
    {
        if (string.IsNullOrWhiteSpace(query))
            return BadRequest("Debe ingresar un texto de búsqueda.");

        var resultados = await _context.Libros
            .Where(l =>
                l.Titulo.Contains(query) ||
                l.Autor.Contains(query) ||
                l.Descripcion.Contains(query))
            .Select(l => new
            {
                l.Id,
                l.Titulo,
                l.Autor,
                l.UrlPortada,
                l.UrlPdf,
                l.Descripcion,
                l.CategoriaId
            })
            .ToListAsync();

        return Ok(resultados);
    }
}
