using Api.Data;
using Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class EmpleadoController : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<List<EmpleadoModels>>> Get()
    {
          using(pintureriaContext db = new pintureriaContext()){
              var empleado = await db.Empleados.Select(x =>
            new EmpleadoModels
            {
                IdEmpleado = x.IdEmpleado,
                Legajo = x.Legajo,
                Nombre = x.Nombre,
                Apellido = x.Apellido,
                Telefono = x.Telefono,
                Mail = x.Mail,
                 TipoEmp = new TipoEmpleadoModel
                {
                    Tipo = x.IdTipoEmpleadoNavigation.Tipo,
                }
            }).ToListAsync();
        return Ok(empleado);}
    }

}
