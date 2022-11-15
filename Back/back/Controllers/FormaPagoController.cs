namespace PintoBello_API.Controllers;

using back.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PintoBello_API.Response;

public class FormaPagoController : ControllerBase
{
    private readonly pintureriaContext _context;

    public FormaPagoController(pintureriaContext context)
    {
        _context = context;
    }

    [HttpGet]
    [Route("api/formasPago/listado")]
    public async Task<ActionResult<RdoFormasPago>> getEmpleados()
    {
        try
        {
            var result = new RdoFormasPago();
            var formaP = await _context.FormasPagos.ToListAsync();

            if (formaP != null)
            {
                foreach (var fp in formaP)
                {
                    var resultAux = new RdoFP
                    {
                        IdFormasPago = fp.IdFormasPago,
                        Descripcion = fp.Descripcion,
                    };
                    result.listaFormasPago.Add(resultAux);
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

}