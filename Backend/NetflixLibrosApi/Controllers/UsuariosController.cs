using Microsoft.AspNetCore.Mvc;
using Libribook.Modelos.Entidades;
using Libribook.Services;
using Libribook.DTOs;

namespace Libribook.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuariosController : ControllerBase
    {
        private readonly UsuarioService _usuarioService;

        public UsuariosController(UsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        [HttpPost("register")]
        public IActionResult Registrar([FromBody] UsuarioCreateDTO dto)
        {
            try
            {
                var usuarioDTO = _usuarioService.CrearUsuario(dto);
                var token = _usuarioService.GenerarJwtToken(usuarioDTO.Email);
                return Ok(new { usuario = usuarioDTO, token });
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensaje = ex.Message });
            }
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginDTO dto)
        {
            try
            {
                var usuarioDTO = _usuarioService.Login(dto.Email, dto.Password);
                if (usuarioDTO == null)
                    return Unauthorized(new { mensaje = "Email o contraseña incorrectos" });

                var token = _usuarioService.GenerarJwtToken(usuarioDTO.Email);
                return Ok(new { usuario = usuarioDTO, token });
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensaje = ex.Message });
            }
        }

        [HttpPost("google-login")]
        public async Task<IActionResult> GoogleLogin([FromBody] string token)
        {
            try
            {
                var payload = await Google.Apis.Auth.GoogleJsonWebSignature.ValidateAsync(token);

                var usuarioDTO = _usuarioService.Login(payload.Email, "");
                if (usuarioDTO == null)
                {
                    var createDTO = new UsuarioCreateDTO
                    {
                        Nombre = payload.Name,
                        Email = payload.Email,
                        Password = ""
                    };
                    usuarioDTO = _usuarioService.CrearUsuario(createDTO);
                }

                var jwt = _usuarioService.GenerarJwtToken(usuarioDTO.Email);
                return Ok(new { usuario = usuarioDTO, token = jwt });
            }
            catch
            {
                return BadRequest("Token de Google inválido.");
            }
        }
    }
}
