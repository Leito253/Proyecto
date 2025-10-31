using Libribook.DTOs;
using Libribook.Modelos.Entidades;


namespace Libribook.Mappers
{
    public static class ReseñaMapper
    {
        public static Reseña ToModel(ReseñaCreateDTO dto)
        {
            return new Reseña
            {
                IdUsuario = dto.IdUsuario,
                IdLibro = dto.IdLibro,
                Comentario = dto.Comentario,
                Puntuacion = dto.Puntuacion,
                Fecha = DateTime.Now
            };
        }

        public static ReseñaDTO ToDTO(Reseña model)
        {
            return new ReseñaDTO
            {
                Id = model.Id,
                IdUsuario = model.IdUsuario,
                IdLibro = model.IdLibro,
                Comentario = model.Comentario,
                Puntuacion = model.Puntuacion,
                Fecha = model.Fecha
            };
        }
    }
}
