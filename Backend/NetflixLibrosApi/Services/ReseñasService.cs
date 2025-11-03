using Libribook.DTOs;
using Libribook.Modelos.Entidades;
using Libribook.Mappers;
using MySql.Data.MySqlClient;

namespace Libribook.Services
{
    public class ReseñaService
    {
        private readonly string _connectionString;

        public ReseñaService(string connectionString)
        {
            _connectionString = connectionString;
        }

        public ReseñaDTO CrearReseña(ReseñaCreateDTO dto)
        {
            var reseña = ReseñaMapper.ToModel(dto);

            using var conn = new MySqlConnection(_connectionString);
            conn.Open();

            var cmd = new MySqlCommand(@"
                INSERT INTO Reseñas (UsuarioId, LibroId, Comentario, Calificacion, FechaReseña)
                VALUES (@UsuarioId, @LibroId, @Comentario, @Calificacion, @FechaReseña);
                SELECT LAST_INSERT_ID();
            ", conn);

            cmd.Parameters.AddWithValue("@UsuarioId", reseña.UsuarioId);
            cmd.Parameters.AddWithValue("@LibroId", reseña.LibroId);
            cmd.Parameters.AddWithValue("@Comentario", reseña.Comentario);
            cmd.Parameters.AddWithValue("@Calificacion", reseña.Calificacion);
            cmd.Parameters.AddWithValue("@FechaReseña", reseña.FechaReseña);

            reseña.Id = Convert.ToInt32(cmd.ExecuteScalar());

            return ReseñaMapper.ToDTO(reseña);
        }

        public List<ReseñaDTO> ObtenerPorLibro(int libroId)
        {
            var lista = new List<ReseñaDTO>();

            using var conn = new MySqlConnection(_connectionString);
            conn.Open();

            var cmd = new MySqlCommand(
                "SELECT * FROM Reseñas WHERE LibroId = @LibroId ORDER BY FechaReseña DESC",
                conn
            );

            cmd.Parameters.AddWithValue("@LibroId", libroId);

            using var reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                var reseña = new Reseña
                {
                    Id = reader.GetInt32("Id"),
                    UsuarioId = reader.GetInt32("UsuarioId"),
                    LibroId = reader.GetInt32("LibroId"),
                    Comentario = reader.GetString("Comentario"),
                    Calificacion = reader.GetInt32("Calificacion"),
                    FechaReseña = reader.GetDateTime("FechaReseña")
                };

                lista.Add(ReseñaMapper.ToDTO(reseña));
            }

            return lista;
        }

        public bool EditarReseña(int userId, ReseñaUpdateDTO dto)
        {
            using var conn = new MySqlConnection(_connectionString);
            conn.Open();

            var checkCmd = new MySqlCommand(
                "SELECT UsuarioId FROM Reseñas WHERE Id=@Id",
                conn
            );

            checkCmd.Parameters.AddWithValue("@Id", dto.Id);

            var result = checkCmd.ExecuteScalar();

            if (result == null || Convert.ToInt32(result) != userId)
                throw new Exception("No puedes editar esta reseña.");

            var cmd = new MySqlCommand(@"
                UPDATE Reseñas 
                SET Comentario=@Comentario, Calificacion=@Calificacion
                WHERE Id=@Id
            ", conn);

            cmd.Parameters.AddWithValue("@Id", dto.Id);
            cmd.Parameters.AddWithValue("@Comentario", dto.Comentario);
            cmd.Parameters.AddWithValue("@Calificacion", dto.Calificacion);

            return cmd.ExecuteNonQuery() > 0;
        }
    }
}
