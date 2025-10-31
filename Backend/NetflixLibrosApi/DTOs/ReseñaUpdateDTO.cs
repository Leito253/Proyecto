namespace Libribook.DTOs
{
    public class ReseñaUpdateDTO
    {
        public int Id { get; set; }
        public string Comentario { get; set; } = string.Empty;
        public int Puntuacion { get; set; }
    }
}
