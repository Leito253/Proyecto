using System.ComponentModel.DataAnnotations.Schema;

namespace NetflixLibrosApi.Modelos;

public class Libro
{
    public int Id { get; set; }
    public required string Titulo { get; set; }
    public required string Autor { get; set; }
    public required string UrlPortada { get; set; }
    public required string UrlPdf { get; set; }
    public required string Descripcion { get; set; }
    public int CategoriaId { get; set; }

    // Propiedad de navegación
    [ForeignKey("CategoriaId")]
    public Categoria Categoria { get; set; } = null!;
}
