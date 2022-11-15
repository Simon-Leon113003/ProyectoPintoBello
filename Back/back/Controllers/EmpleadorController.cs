using System;
namespace PintoBello_API.Controllers;

using back.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PintoBello_API.Request;
using PintoBello_API.Response;

public class EmpleadorController : ControllerBase
{
    private readonly pintureriaContext _context;

    public EmpleadorController(pintureriaContext context)
    {
        _context = context;
    }

    [HttpPost]
    [Route("api/empleado/login")]
    public async Task<ActionResult<int>> loginEmpleado([FromBody] EmpleadoPassRequest cmd)
    {
        try
        {
            var result = 0;
            var empleado = await _context.Empleados.Where(c => c.Usuario.Equals(cmd.Usuario) && c.Contrasena.Equals(cmd.Contrasena)).FirstOrDefaultAsync();

            if (empleado == null)
            {
                return BadRequest("Usuario y/o contraseña incorreta");
            }
            else
            {
                result = empleado.IdTipoEmpleado;
                return Ok(result);
            }
        }
        catch (Exception e)
        {
            return BadRequest("No se puede realizar esta acción");
        }
    }

    [HttpGet]
    [Route("api/empleado/listado")]
    public async Task<ActionResult<List<RdoEmplUnico>>> getEmpleados()
    {
        try
        {
            var result = new List<RdoEmplUnico>();
            var empleados = await _context.Empleados.Include(c => c.IdTipoEmpleadoNavigation).Where(e=> e.Activo == true).ToListAsync();

            if (empleados != null)
            {
                foreach (var e in empleados)
                {
                    var resultAux = new RdoEmplUnico
                    {
                        IdEmpleado = e.IdEmpleado,
                        tipoEmpleado = e.IdTipoEmpleadoNavigation.Tipo,
                        Legajo = e.Legajo,
                        Nombre = e.Nombre,
                        Apellido = e.Apellido,
                        Dni = e.Dni,
                        Telefono = e.Telefono,
                        Mail = e.Mail,
                        Usuario = e.Usuario
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
    [Route("api/empleado/obtenerId/{id}")]
    public async Task<ActionResult<RdoEmplUnico>> getEmpleadoId(int id)
    {
        try
        {
            var result = new RdoEmplUnico();
            var empleado = await _context.Empleados.Where(c => c.IdEmpleado.Equals(id)).Include(c => c.IdTipoEmpleadoNavigation).
            FirstOrDefaultAsync();

            if (empleado != null)
            {
                result.IdEmpleado = empleado.IdEmpleado;
                result.tipoEmpleado = empleado.IdTipoEmpleadoNavigation.Tipo;
                result.Legajo = empleado.Legajo;
                result.Nombre = empleado.Nombre;
                result.Apellido = empleado.Apellido;
                result.Dni = empleado.Dni;
                result.Telefono = empleado.Telefono;
                result.Mail = empleado.Mail;
                result.Usuario = empleado.Usuario;
                return Ok(result);
            }
            return BadRequest("No se encontro el empleado");
        }
        catch (Exception e)
        {
            return BadRequest("No se puede realizar esta acción");
        }
    }

    [HttpPost]
    [Route("api/empleado/alta")]
    public async Task<ActionResult<bool>> postEmpleado([FromBody] EmpleadoRequest cmd)
    {
        try
        {
            var result = new RdoEmplUnico();
            var empleado = await _context.Empleados.Where(c => c.Activo == true && c.Dni.Equals(cmd.Dni)).FirstOrDefaultAsync();

            if (empleado == null)
            {
                var nuevo = new Empleado()
                {
                    IdTipoEmpleado = cmd.IdTipoEmpleado,
                    Legajo = cmd.Legajo,
                    Nombre = cmd.Nombre,
                    Apellido = cmd.Apellido,
                    Dni = cmd.Dni,
                    Telefono = cmd.Telefono,
                    Mail = cmd.Mail,
                    Usuario = cmd.Usuario,
                    Contrasena = cmd.Contrasena,
                    Activo = true
                };
                await _context.AddAsync(nuevo);
                await _context.SaveChangesAsync();

                return Ok(true);
            }
            else
            {
                return BadRequest("El empleado ya existe");
            }
        }
        catch (Exception e)
        {
            return BadRequest(e);
        }
    }

    [HttpPut]
    [Route("api/empleado/update/{id}")]
    public async Task<ActionResult<bool>> editEmpleado([FromBody] EmpleadoEditRequest cmd, int id)
    {
        try
        {
            var empleado = await _context.Empleados.Where(c => c.IdEmpleado.Equals(id)
            ).FirstOrDefaultAsync();

            if (empleado != null)
            {
                empleado.Nombre = cmd.Nombre;
                empleado.Apellido = cmd.Apellido;
                empleado.Mail = cmd.Mail;
                empleado.Telefono = cmd.Telefono;

                _context.Update(empleado);
                await _context.SaveChangesAsync();

                return Ok(true);
            }
            else
            {
                return BadRequest("No existen empleados con esas credenciales");
            }
        }
        catch (Exception e)
        {
            return BadRequest("No se puede realizar esta acción");
        }
    }

    [HttpPut]
    [Route("api/empleado/updateUsuario/{id}")]
    public async Task<ActionResult<bool>> editUsuEmpleado([FromBody] EmpleadoPassRequest cmd, int id)
    {
        try
        {
            var empleado = await _context.Empleados.Where(c => c.IdEmpleado.Equals(id)
            ).FirstOrDefaultAsync();

            if (empleado != null)
            {
                empleado.Usuario = cmd.Usuario;
                empleado.Contrasena = cmd.Contrasena;

                _context.Update(empleado);
                await _context.SaveChangesAsync();

                return Ok(true);
            }
            else
            {
                return BadRequest("No existen empleados con esas credenciales");
            }
        }
        catch (Exception e)
        {
            return BadRequest("No se puede realizar esta acción");
        }
    }

    
    
        [HttpPut]
        [Route("api/empleado/baja/{id}")]
        public async Task<ActionResult<bool>> deleteEmpleado(int id)
        {
            try
            {
                var empleado = await _context.Empleados.Where(c => c.IdEmpleado.Equals(id)).FirstOrDefaultAsync();
                if (empleado != null)
                {
                    empleado.Activo = false;

                    _context.Update(empleado);
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

    [HttpGet]
    [Route("api/tipoEmpleado/listado")]
    public async Task<ActionResult<RdoTipoEmpleado>> getTiposEmpl()
    {
        try
        {
            var result = new List<RdoTipoEmpleado>();
            var tipos = await _context.TipoEmpleados.Where(t=> t.Activo == true).ToListAsync();

            if (tipos != null)
            {
                foreach (var t in tipos)
                {
                    var resultAux = new RdoTipoEmpleado
                    {
                        IdTipoEmpleado = t.IdTipoEmpleado,
                        Tipo = t.Tipo
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

    [HttpPost]
    [Route("api/tipoEmpleado/alta")]
    public async Task<ActionResult<bool>> postTiposEmpl([FromBody]TipoEmpleadosRequest cmd)
    {
        try
        {
            var existe = await _context.TipoEmpleados.Where(t=> t.Activo == true && t.IdTipoEmpleado == cmd.IdTipoEmpleado && t.Tipo.Equals(cmd.Tipo)).ToListAsync();

            if (existe != null)
            {
                var result = new TipoEmpleado{
                    Tipo = cmd.Tipo,
                    Activo = true
                };

                await _context.TipoEmpleados.AddAsync(result);
                await _context.SaveChangesAsync();

                return Ok(true);
            }
            else
            {
                return Ok(false);
            }
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPut]
        [Route("api/tipoEmpleado/baja/{id}")]
        public async Task<ActionResult<bool>> deleteTipoEmpleado(int id)
        {
            try
            {
                var tipoEmpleado = await _context.TipoEmpleados.Where(c => c.IdTipoEmpleado.Equals(id)).FirstOrDefaultAsync();
                if (tipoEmpleado != null)
                {
                    tipoEmpleado.Activo = false;

                    _context.Update(tipoEmpleado);
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
