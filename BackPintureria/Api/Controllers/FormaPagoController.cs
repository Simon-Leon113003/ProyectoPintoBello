using Api.Data;
using Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FormaPagoController : ControllerBase
{
[HttpGet]
public async Task<ActionResult<List<FormaPagoModel>>> Get()
    {
          using(pintureriaContext db = new pintureriaContext()){
              var formaPago = await db.FormasPagos.Select(x =>
            new FormaPagoModel
            {
               IdFormasPago = x.IdFormasPago,
               Descripcion = x.Descripcion
            }).ToListAsync();
        return Ok(formaPago);}
    }
}
