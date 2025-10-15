using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NetflixLibrosApi.Data;
using NetflixLibrosApi.Modelos;

namespace NetflixLibrosAPI.Controllers;
[Route("api/[controller]")]
[ApiController]
public class CategoriasController : ControllerBase
{
    private readonly NetflixLibrosContext _context;

    public CategoriasController(NetflixLibrosContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Categoria>>> GetCategorias()
    {
        try
        {
            var categorias = await _context.Categorias.ToListAsync();
            return Ok(categorias);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { mensaje = "Error al obtener las categorías", detalle = ex.Message });
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Categoria>> GetCategoria(int id)
    {
        var categoria = await _context.Categorias.FindAsync(id);

        if (categoria == null)
            return NotFound(new { mensaje = "Categoría no encontrada" });

        return Ok(categoria);
    }

    [HttpPost]
    public async Task<ActionResult<Categoria>> CrearCategoria(Categoria categoria)
    {
        _context.Categorias.Add(categoria);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetCategoria), new { id = categoria.Id }, categoria);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> ActualizarCategoria(int id, Categoria categoria)
    {
        if (id != categoria.Id)
            return BadRequest(new { mensaje = "ID no coincide" });

        _context.Entry(categoria).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
            return NoContent();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!_context.Categorias.Any(c => c.Id == id))
                return NotFound(new { mensaje = "Categoría no encontrada" });
            else
                throw;
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> EliminarCategoria(int id)
    {
        var categoria = await _context.Categorias.FindAsync(id);
        if (categoria == null)
            return NotFound(new { mensaje = "Categoría no encontrada" });

        _context.Categorias.Remove(categoria);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}
