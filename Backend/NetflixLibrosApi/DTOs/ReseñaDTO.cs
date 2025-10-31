namespace Libribook.DTOs
{
    public class ReseñaDTO
    {
        public int Id { get; set; }
        public int LibroId { get; set; }
        public string LibroTitulo { get; set; } = string.Empty;
        public int UsuarioId { get; set; }
        public string UsuarioNombre { get; set; } = string.Empty;
        public string Contenido { get; set; } = string.Empty;
        public int Puntuacion { get; set; } // 1 a 5
        public DateTime FechaCreacion { get; set; } = DateTime.Now;
    }
}
