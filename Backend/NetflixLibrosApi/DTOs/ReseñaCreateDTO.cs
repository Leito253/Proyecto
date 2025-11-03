namespace Libribook.DTOs
{
    public class ReseñaCreateDTO
    {
        public int UsuarioId { get; set; }
        public int LibroId { get; set; }
        public string Comentario { get; set; } = string.Empty;
        public int Calificacion { get; set; }
    }
}
