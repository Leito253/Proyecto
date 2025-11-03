using Libribook.Modelos.Entidades;
using Libribook.DTOs;

namespace Libribook.Mappers
{
    public static class ReseñaMapper
    {
        public static Reseña ToModel(ReseñaCreateDTO dto)
        {
            return new Reseña
            {
                UsuarioId = dto.UsuarioId,
                LibroId = dto.LibroId,
                Comentario = dto.Comentario,
                Calificacion = dto.Calificacion,
                FechaReseña = DateTime.Now
            };
        }

        public static ReseñaDTO ToDTO(Reseña model)
        {
            return new ReseñaDTO
            {
                Id = model.Id,
                UsuarioId = model.UsuarioId,
                LibroId = model.LibroId,
                Comentario = model.Comentario,
                Calificacion = model.Calificacion,
                FechaReseña = model.FechaReseña
            };
        }
    }
}
