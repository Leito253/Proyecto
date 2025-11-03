namespace Libribook.DTOs
{
    public class ReseñaUpdateDTO
    {
        public int Id { get; set; }
        public int UsuarioId { get; set; }
        public string Comentario { get; set; } = string.Empty;
        public int  Calificacion { get; set; }
    }
}
