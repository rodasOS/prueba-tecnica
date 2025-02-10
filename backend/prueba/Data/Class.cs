using Microsoft.EntityFrameworkCore;
using prueba.Models;

namespace prueba.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options) { }

        public DbSet<Alumno> Alumnos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql("server=localhost;port=3306;database=NombreDeTuDB;user=tu_usuario;password=tu_contraseña",
                    new MySqlServerVersion(new Version(8, 0, 30))); // Ajusta la versión de MySQL según corresponda
            }
        }
    }
}

