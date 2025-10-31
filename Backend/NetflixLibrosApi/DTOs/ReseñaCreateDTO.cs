namespace Libribook.DTOs
{
    public class ReseñaCreateDTO
    {
        public int LibroId { get; set; }
        public int UsuarioId { get; set; }
        public string Contenido { get; set; } = string.Empty;
        public int Puntuacion { get; set; }
    }
}
