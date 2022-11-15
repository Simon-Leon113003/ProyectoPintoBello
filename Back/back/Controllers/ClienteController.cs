namespace PintoBello_API.Controllers;

using back.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PintoBello_API.Request;
using PintoBello_API.Response.Cliente;

public class ClienteController : ControllerBase
{
    private readonly pintureriaContext _context;

    public ClienteController(pintureriaContext context)
    {
        _context = context;
    }

    [HttpGet]
    [Route("api/cliente/listado")]
    public async Task<ActionResult<RdoListadoClientes>> getClientes()
    {
        try
        {
            var result = new List<RdoCliente>();
            var clientes = await _context.Clientes.Where(c=> c.Activo == true).Include(c=>c.IdBarriosNavigation).ToListAsync();

            if (clientes != null)
            {
                foreach (var c in clientes)
                {
                    var resultAux = new RdoCliente
                    {
                        id = c.IdCliente,
                        nombre = c.Nombre,
                        apellido = c.Apellido,
                        dni = c.Dni,
                        telefono = c.Telefono,
                        mail = c.Mail,
                        fechaNac = c.FechNac,
                        barrio = c.IdBarriosNavigation.Descripcion
                    };
                    result.Add(resultAux);
                }
                return Ok(result);
            }
            else
            {
                return BadRequest(result);
            }
        }
        catch (Exception e)
        {
            return BadRequest("No se puede realizar esta acción");
        }
    }

    [HttpGet]
    [Route("api/cliente/obtenerId/{id}")]
    public async Task<ActionResult<RdoCliente>> getClienteId(int id)
    {
        try
        {
            var result = new RdoCliente();
            var cliente = await _context.Clientes.Where(c => c.IdCliente.Equals(id)).Include(c=>c.IdBarriosNavigation).
            FirstOrDefaultAsync();

            if (cliente != null)
            {
                result.id = cliente.IdCliente;
                result.nombre = cliente.Nombre;
                result.apellido = cliente.Apellido;
                result.dni = cliente.Dni;
                result.telefono = cliente.Telefono;
                result.mail = cliente.Mail;
                result.fechaNac = cliente.FechNac;
                result.barrio = cliente.IdBarriosNavigation.Descripcion;
            }
            return result;
        }
        catch (Exception e)
        {
            return BadRequest("No se puede realizar esta acción");
        }
    }

    [HttpPost]
    [Route("api/cliente/alta")]
    public async Task<ActionResult<bool>> postCliente([FromBody] ClienteRequest cmd)
    {
           try{
            var result = new RdoCliente();
            var cliente = await _context.Clientes.Where(c => c.Dni.Equals(cmd.Dni)).FirstOrDefaultAsync();

            if (cliente == null)
            {
                var nuevo = new Cliente(){   
                    Nombre = cmd.Nombre,
                    Apellido = cmd.Apellido,
                    Dni = cmd.Dni,
                    Telefono = cmd.Telefono,
                    Mail = cmd.Mail,
                    FechNac = cmd.FechNac,
                    IdBarrios = cmd.IdBarrios,
                    Activo = true};
                await _context.AddAsync(nuevo);
                await _context.SaveChangesAsync();
                return Ok(true);
            }
            else{
                return BadRequest("El cliente ya existe");}
        }
        catch (Exception e){
            return BadRequest(e);
        }
    }



    [HttpPut]
    [Route("api/cliente/update/{id}")]
    public async Task<ActionResult<bool>> editCliente([FromBody] ClienteEditRequest cmd, int id)
    {
        try
        {
            var cliente = await _context.Clientes.Where(c => c.IdCliente.Equals(id)
            ).FirstOrDefaultAsync();

            if (cliente != null)
            {

                cliente.Nombre = cmd.Nombre;
                cliente.Apellido = cmd.Apellido;
                cliente.Telefono = cmd.Telefono;
                cliente.Mail = cmd.Mail;
                cliente.FechNac = cmd.FechNac;
                cliente.IdBarrios = cmd.IdBarrios;

                _context.Update(cliente);
                await _context.SaveChangesAsync();

                return Ok(true);
            }
            else
            {
                return Ok("No existen clientes con esas credenciales");
            }
        }
        catch (Exception e)
        {
            return BadRequest("No se puede realizar esta acción");
        }
    }

    [HttpPut]
    [Route("api/cliente/baja/{id}")]
    public async Task<ActionResult<bool>> deleteClienten(int id)
    {
        try
        {
            var cliente = await _context.Clientes.Where(c => c.IdCliente.Equals(id)).FirstOrDefaultAsync();
            if (cliente != null)
            {
                cliente.Activo = false;

                _context.Update(cliente);
                await _context.SaveChangesAsync();
                return Ok(true);
            }
            else
            {
                return BadRequest(false);
            }
        }
        catch (Exception e)
        {
            return BadRequest("No se puede realizar esta acción");
        }
    }

}