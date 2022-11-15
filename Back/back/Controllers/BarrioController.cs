namespace PintoBello_API.Controllers;

using back.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PintoBello_API.Request;
using PintoBello_API.Response.Barrio;

public class BarrioController : ControllerBase
{
    private readonly pintureriaContext _context;

    public BarrioController(pintureriaContext context)
    {
        _context = context;
    }

    [HttpGet]
    [Route("api/barrio/listaBarrios")]
    public async Task<ActionResult<List<RdoBarrio>>> getBarrios()
    {
        try
        {
            var result = new List<RdoBarrio>();
            var barrios = await _context.Barrios.Where(b=> b.Activo == true).ToListAsync();

            if (barrios != null)
            {
                foreach (var b in barrios)
                {
                    var resultAux = new RdoBarrio
                    {
                        id = b.IdBarrios,
                        descripcion = b.Descripcion
                    };
                    result.Add(resultAux);

                }
                return Ok(result);
            }
            else
            {
                return Ok(result);
            }
        }
        catch (Exception e)
        {
            return BadRequest("No se puede realizar esta acción");
        }
    }

    [HttpPost]
    [Route("api/barrio/agregar")]
    public async Task<ActionResult<bool>> addBarrio([FromBody] BarrioRequest cmd)
    {
        try
        {
            var barrio = await _context.Barrios.Where(b => b.Activo == true && b.Descripcion.Equals(cmd.Descripcion)).
            FirstOrDefaultAsync();

            if (barrio == null)
            {
                var nuevo = new Barrio()
                {
                    Descripcion = cmd.Descripcion,
                    Activo = true
                };
                await _context.AddAsync(nuevo);
                await _context.SaveChangesAsync();

                return Ok(true);
            }
            else
            {
                return Ok("Ya existe un barrio con ese nombre");
            }
        }
        catch (Exception e)
        {
            return BadRequest("No se puede realizar esta acción");
        }
    }

    [HttpPut]
    [Route("api/barrio/editar/{id}")]
    public async Task<ActionResult<bool>> editBarrio([FromBody] BarrioRequest cmd, int id)
    {
        try
        {
            var barrio = await _context.Barrios.Where(b => b.IdBarrios.Equals(id)).
            FirstOrDefaultAsync();

            if (barrio != null)
            {
                barrio.Descripcion = cmd.Descripcion;

                _context.Update(barrio);
                await _context.SaveChangesAsync();
            }
            return Ok(true);
        }
        catch (Exception e)
        {
            return BadRequest("No se puede realizar esta acción");
        }
    }

    [HttpPut]
    [Route("api/barrio/baja/{id}")]
    public async Task<ActionResult<bool>> bajaBarrio(int id)
    {
        try
        {
            var barrio = await _context.Barrios.Where(b => b.IdBarrios.Equals(id)).
            FirstOrDefaultAsync();

            if (barrio != null)
            {
                barrio.Activo = false;

                _context.Update(barrio);
                await _context.SaveChangesAsync();
            }
            return Ok(true);
        }
        catch (Exception e)
        {
            return BadRequest("No se puede realizar esta acción");
        }
    }
}