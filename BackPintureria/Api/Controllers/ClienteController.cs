using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Api.Data;
using Api.Models;
using Api.Response;
using Api.Request;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class ClienteController : ControllerBase
{
    // private readonly pintureriaContext _context;

    // public ClienteController(pintureriaContext context)
    // {
    //     _context = context;
    // }

    [HttpGet]
    public async Task<ActionResult<List<ClienteModel>>> Get()
    {
          using(pintureriaContext db = new pintureriaContext()){
              var cliente = await db.Clientes.Select(x =>
            new ClienteModel
            {
                IdCliente = x.IdCliente,
                Nombre = x.Nombre,
                Apellido = x.Apellido,
                Dni = x.Dni,
                Telefono = x.Telefono,
                Mail = x.Mail,
                FechNac = x.FechNac,

                Barrio = new BarrioModel
                {
                    Descripcion = x.IdBarriosNavigation.Descripcion,
                }
            }).ToListAsync();
        return Ok(cliente);}
    }


    [HttpGet]
    [Route("/api/Cliente/{idCliente}")]

    public async Task<ActionResult<Respuesta>> GetId(int idCliente)
    {
        var resultado = new Respuesta();

        try
        {
            using(pintureriaContext db = new pintureriaContext()){
            var cliente = await db.Clientes.Where(c => c.IdCliente == idCliente).FirstOrDefaultAsync();//usando Linq
                                                                                       // resultado.Return = ListaPersona[idUsuario];
            resultado.Exito = 1;
            resultado.Data = cliente;
            return resultado;}
        }
        catch (Exception ex)
        {
            resultado.Mensaje = ex.Message;
            return resultado;
        }


    }
    [HttpPost]
    //[Route("/api/AltaCliente")]

    public async Task<ActionResult<Respuesta>> AltaCliente([FromBody] ClienteRequest request)
    {

        var resultado = new Respuesta();

        if (request.Nombre.Equals(""))
        {
            resultado.Exito = 0;
            resultado.Mensaje = "Ingese nombre";

            return resultado;
        }
        if (request.Apellido.Equals(""))
        {
            resultado.Exito = 0;
            resultado.Mensaje = "Ingese apellido";

            return resultado;
        }
        var cliente = new Cliente();
        cliente.Nombre = request.Nombre;
        cliente.Apellido = request.Apellido;
        cliente.Dni = request.Dni;
        cliente.Telefono = request.Telefono;
        cliente.Mail = request.Mail;
        cliente.FechNac = request.FechNac;
        cliente.IdBarrios = request.IdBarrios;
    using(pintureriaContext db = new pintureriaContext()){
      await  db.Clientes.AddAsync(cliente);
        db.SaveChanges();
        resultado.Exito = 1;
        resultado.Data = db.Clientes.ToList();

        return resultado;}

    }

    [HttpPut]
    [Route("/api/UpdateCiente")]

    public async Task <ActionResult<Respuesta>> UpdateCliente([FromBody] ClienteRequest request)
    {

        var resultado = new Respuesta();

        if (request.Nombre.Equals(""))
        {
            resultado.Exito = 0;
            resultado.Mensaje = "Ingese nombre";

            return resultado;
        }
        if (request.Apellido.Equals(""))
        {
            resultado.Exito = 0;
            resultado.Mensaje = "Ingese Apellido";

            return resultado;
        }
        using(pintureriaContext db = new pintureriaContext()){
        var cliente  = await db.Clientes.Where(c=>c.IdCliente==request.IdCliente).FirstOrDefaultAsync();
        if(cliente !=null)
        {
                cliente.Nombre = request.Nombre;
                cliente.Apellido = request.Apellido;
                cliente.Dni = request.Dni;
                cliente.Telefono = request.Telefono;
                cliente.Mail = request.Mail;
                cliente.FechNac = request.FechNac;
                cliente.IdBarrios = request.IdBarrios;
                db.Clientes.Update(cliente);
               await db.SaveChangesAsync();
        }
        resultado.Exito = 1;
        resultado.Data = db.Clientes.ToList();


        return resultado;}



    }

}