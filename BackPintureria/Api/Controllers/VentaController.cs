using Api.Data;
using Api.Request;
using Api.Response;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class VentaController : ControllerBase
{


    [HttpPost]

    public IActionResult Add(FacturaRequest request)
    {
        Respuesta respuesta = new Respuesta();
        try
        {
            using (pintureriaContext db = new pintureriaContext())
            {

                using (var transaccion = db.Database.BeginTransaction())
                {
                    try
                    {
                        var factura = new Factura();
                        factura.Total = request.Detalles.Sum(d => d.Cantidad * d.PrecioUnitario);
                        factura.Fecha = DateTime.Now;
                        factura.IdCliente = request.IdCliente;
                        factura.IdEmpleado = request.IdEmpleado;
                        factura.IdFormasPago = request.IdFormasPago;
                        db.Facturas.Add(factura);
                        db.SaveChanges();

                        foreach (var item in request.Detalles)
                        {
                            var detalle = new DetalleFactura();
                            detalle.Cantidad = item.Cantidad;
                            detalle.PrecioUnitario = item.PrecioUnitario;
                            detalle.Importe = item.Importe;
                            detalle.IdProducto = item.IdProducto;
                            detalle.IdFactura = factura.IdFactura;
                            db.DetalleFacturas.Add(detalle);
                            db.SaveChanges();

                        }
                        transaccion.Commit();
                        respuesta.Exito = 1;
                    }
                    catch(Exception){
                        transaccion.Rollback();
                    }
                }
            }

        }
        catch (Exception ex)
        {

            respuesta.Mensaje = ex.Message;
        }

        return Ok(respuesta);
    }
}
