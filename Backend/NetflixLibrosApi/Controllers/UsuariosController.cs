using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NetflixLibrosApi.Data;
using NetflixLibrosApi.Modelos;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Google.Apis.Auth;


namespace NetflixLibrosAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsuariosController : ControllerBase
{
    private readonly NetflixLibrosContext _context;
    private readonly IConfiguration _configuration;

    public UsuariosController(NetflixLibrosContext context, IConfiguration configuration)
    {
        _context = context;
        _configuration = configuration;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] Usuario usuario)
    {
        if (await _context.Usuarios.AnyAsync(u => u.Email == usuario.Email))
            return BadRequest("El email ya está registrado.");

        usuario.Contraseña = BCrypt.Net.BCrypt.HashPassword(usuario.Contraseña);

        _context.Usuarios.Add(usuario);
        await _context.SaveChangesAsync();
        return Ok(usuario);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] Usuario loginData)
    {
        var usuario = await _context.Usuarios.FirstOrDefaultAsync(u => u.Email == loginData.Email);
        if (usuario == null || !BCrypt.Net.BCrypt.Verify(loginData.Contraseña, usuario.Contraseña))
            return Unauthorized("Credenciales inválidas.");

        var token = GenerateJwtToken(usuario);
        return Ok(new { usuario = usuario.Email, token });
    }

    [HttpPost("google-login")]
    public async Task<IActionResult> GoogleLogin([FromBody] string token)
    {
        try
        {
            var payload = await GoogleJsonWebSignature.ValidateAsync(token);

            var usuario = await _context.Usuarios.FirstOrDefaultAsync(u => u.Email == payload.Email);

            if (usuario == null)
            {
                usuario = new Usuario
                {
                    Email = payload.Email,
                    Nombre = payload.Name,
                    Contraseña = "",
                };
                _context.Usuarios.Add(usuario);
                await _context.SaveChangesAsync();
            }

            var jwt = GenerateJwtToken(usuario);
            return Ok(new { usuario = usuario.Email, token = jwt });
        }
        catch
        {
            return BadRequest("Token de Google inválido.");
        }
    }

    private string GenerateJwtToken(Usuario usuario)
    {
        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, usuario.Email),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            _configuration["Jwt:Issuer"],
            _configuration["Jwt:Audience"],
            claims,
            expires: DateTime.Now.AddDays(7),
            signingCredentials: creds
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
