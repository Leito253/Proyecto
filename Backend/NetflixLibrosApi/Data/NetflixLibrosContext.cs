using Microsoft.EntityFrameworkCore;
using NetflixLibrosApi.Modelos;
using Libribook.Modelos.Entidades;

namespace NetflixLibrosApi.Data
{
      public class NetflixLibrosContext : DbContext
      {
            public NetflixLibrosContext(DbContextOptions<NetflixLibrosContext> options)
                  : base(options)
            {
            }

            public DbSet<Libro> Libros { get; set; }
            public DbSet<Categoria> Categorias { get; set; }
            public DbSet<Usuario> Usuarios { get; set; } = null!;

            protected override void OnModelCreating(ModelBuilder modelBuilder)
            {
                  modelBuilder.Entity<Libro>(entity =>
                  {
                        entity.ToTable("Libros");

                        entity.HasKey(e => e.Id);

                        entity.Property(e => e.Id)
                              .HasColumnName("Id")
                              .ValueGeneratedOnAdd();

                        entity.Property(e => e.Titulo)
                              .IsRequired()
                              .HasMaxLength(200);

                        entity.Property(e => e.Autor)
                              .IsRequired()
                              .HasMaxLength(200);

                        entity.Property(e => e.UrlPortada)
                              .HasMaxLength(500);

                        entity.Property(e => e.Descripcion)
                              .HasMaxLength(1000);

                        entity.Property(e => e.UrlPdf)
                              .HasMaxLength(500);

                        entity.HasOne(e => e.Categoria)
                              .WithMany(c => c.Libros)
                              .HasForeignKey(e => e.CategoriaId)
                              .OnDelete(DeleteBehavior.SetNull);
                  });

                  modelBuilder.Entity<Categoria>(entity =>
                  {
                        entity.ToTable("Categorias");

                        entity.HasKey(e => e.Id);

                        entity.Property(e => e.Id)
                              .HasColumnName("Id")
                              .ValueGeneratedOnAdd();

                        entity.Property(e => e.Nombre)
                              .IsRequired()
                              .HasMaxLength(100);
                  });
            }
      }
}