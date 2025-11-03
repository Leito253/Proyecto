using Libribook.DTOs;
using Libribook.Mappers;
using Libribook.Modelos.Entidades;
using Libribook.Services;
using Microsoft.AspNetCore.Mvc;

namespace Libribook.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReseñasController : ControllerBase
    {
        private readonly ReseñaService _reseñaService;

        public ReseñasController(ReseñaService reseñaService)
        {
            _reseñaService = reseñaService;
        }

        [HttpPost]
        public IActionResult CrearReseña([FromBody] ReseñaCreateDTO dto)
        {
            try
            {
                var nueva = _reseñaService.CrearReseña(dto);
                return Ok(nueva);
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensaje = ex.Message });
            }
        }

        [HttpGet("libro/{idLibro}")]
        public IActionResult ObtenerPorLibro(int idLibro)
        {
            var lista = _reseñaService.ObtenerPorLibro(idLibro);
            return Ok(lista);
        }

        [HttpPut("{id}")]
        public IActionResult EditarReseña(int id, [FromBody] ReseñaUpdateDTO dto)
        {
            try
            {
                int usuarioId = dto.UsuarioId;
                dto.Id = id;
                var resultado = _reseñaService.EditarReseña(usuarioId, dto);
                return Ok(new { success = resultado });
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensaje = ex.Message });
            }
        }
    }
}
