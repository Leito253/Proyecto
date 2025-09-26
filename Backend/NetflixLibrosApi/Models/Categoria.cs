namespace NetflixLibrosAPI.Modelos
{
    public class Categoria
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = string.Empty;

        // Relación 1:N (una categoría tiene muchos libros)
        public ICollection<Libro> Libros { get; set; } = new List<Libro>();
    }
}
