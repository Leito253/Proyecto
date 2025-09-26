using System.ComponentModel.DataAnnotations.Schema;
namespace NetflixLibrosAPI.Modelos;

public class Libro
{
    public int Id { get; set; }
    public string Titulo { get; set; } = string.Empty;
    public string Autor { get; set; } = string.Empty;
    public string UrlPortada { get; set; } = string.Empty;
    public string UrlPdf { get; set; } = string.Empty;
    public string Descripcion { get; set; } = string.Empty;
    public int CategoriaId { get; set; }

    // Propiedad de navegación
    [ForeignKey("CategoriaId")]
    public Categoria Categoria { get; set; } = null!;
}
