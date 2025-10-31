using Libribook.Modelos.Entidades;
using Libribook.DTOs;
using BCrypt.Net;

namespace Libribook.Mappers
{
    public static class UsuarioMapper
    {
        public static Usuario ToModel(UsuarioCreateDTO dto)
        {
            return new Usuario
            {
                Nombre = dto.Nombre,
                Apellido = dto.Apellido,
                Email = dto.Email,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password),
                Rol = "Usuario",
                Activo = true,
                FechaRegistro = DateTime.Now
            };
        }

        public static UsuarioDTO ToDTO(Usuario usuario)
        {
            return new UsuarioDTO
            {
                Id = usuario.Id,
                Nombre = usuario.Nombre,
                Apellido = usuario.Apellido,
                Email = usuario.Email,
                Rol = usuario.Rol,
                Activo = usuario.Activo
            };
        }
    }
}
