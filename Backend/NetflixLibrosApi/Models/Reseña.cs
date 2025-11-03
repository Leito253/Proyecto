namespace Libribook.Modelos.Entidades
{
    public class Reseña
    {
        public int Id { get; set; }
        public int UsuarioId { get; set; }
        public int LibroId { get; set; }
        public string Comentario { get; set; } = string.Empty;
        public int Calificacion { get; set; }
        public DateTime FechaReseña { get; set; } = DateTime.Now;
    }
}
