using Libribook.DTOs;
using Libribook.Modelos.Entidades;
using Libribook.Mappers;
using MySql.Data.MySqlClient;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace Libribook.Services
{
    public class UsuarioService
    {
        private readonly string _connectionString;
        private readonly IConfiguration _configuration;

        public UsuarioService(string connectionString, IConfiguration configuration)
        {
            _connectionString = connectionString;
            _configuration = configuration;
        }

        public UsuarioDTO CrearUsuario(UsuarioCreateDTO dto)
        {
            var usuario = UsuarioMapper.ToModel(dto);

            using var conn = new MySqlConnection(_connectionString);
            conn.Open();

            var cmd = new MySqlCommand(@"
                INSERT INTO Usuarios (Nombre, Apellido, Email, PasswordHash, Rol, Activo, FechaRegistro)
                VALUES (@Nombre, @Apellido, @Email, @PasswordHash, @Rol, @Activo, @FechaRegistro);
                SELECT LAST_INSERT_ID();", conn);

            cmd.Parameters.AddWithValue("@Nombre", usuario.Nombre);
            cmd.Parameters.AddWithValue("@Apellido", usuario.Apellido);
            cmd.Parameters.AddWithValue("@Email", usuario.Email);
            cmd.Parameters.AddWithValue("@PasswordHash", usuario.PasswordHash);
            cmd.Parameters.AddWithValue("@Rol", usuario.Rol);
            cmd.Parameters.AddWithValue("@Activo", usuario.Activo);
            cmd.Parameters.AddWithValue("@FechaRegistro", usuario.FechaRegistro);

            usuario.Id = Convert.ToInt32(cmd.ExecuteScalar());

            return UsuarioMapper.ToDTO(usuario);
        }

        public UsuarioDTO? Login(string email, string password)
        {
            using var conn = new MySqlConnection(_connectionString);
            conn.Open();

            var cmd = new MySqlCommand("SELECT * FROM Usuarios WHERE Email=@Email", conn);
            cmd.Parameters.AddWithValue("@Email", email);

            using var reader = cmd.ExecuteReader();
            if (reader.Read())
            {
                string hash = reader.GetString("PasswordHash");
                if (BCrypt.Net.BCrypt.Verify(password, hash))
                {
                    var usuario = new Usuario
                    {
                        Id = reader.GetInt32("Id"),
                        Nombre = reader.GetString("Nombre"),
                        Apellido = reader.GetString("Apellido"),
                        Email = reader.GetString("Email"),
                        Rol = reader.GetString("Rol"),
                        Activo = reader.GetBoolean("Activo"),
                        FechaRegistro = reader.GetDateTime("FechaRegistro")
                    };
                    return UsuarioMapper.ToDTO(usuario);
                }
            }
            return null;
        }

        public string GenerarJwtToken(string email)
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, email),
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
}
