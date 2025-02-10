using Microsoft.AspNetCore.Mvc;
using prueba.Data;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class TestController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public TestController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet("test-connection")]
    public async Task<IActionResult> TestConnection()
    {
        try
        {
            var alumnos = await _context.Alumnos.ToListAsync();
            return Ok(new { message = "Conexión exitosa", data = alumnos });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "Error al conectar a la base de datos", error = ex.Message });
        }
    }
}