using Api.Data;
using Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductoController  : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<List<ProductoModel>>> Get()
    {
          using(pintureriaContext db = new pintureriaContext()){
              var producto = await db.Productos.Select(x =>
            new ProductoModel
            {
                IdProducto = x.IdProducto,
                Nombre = x.Nombre,
                Marca = x.Marca,
                FechaVencimineto = x.FechaVencimineto,
                Tamaño = x.Tamaño,

                TipoProducto = new TipoProductoModels{
                    Descripcion = x.IdTipoProductoNavigation.Descripcion,
                },

                Proveedor = new ProveedorModel{
                    Nombre = x.IdProveedorNavigation.Nombre,
                    Apellido = x.IdProveedorNavigation.Apellido,
                },

                 MarcaBd = new MarcaModel {
                    Descripcion = x.IdMarcaNavigation.Descripcion,
                }
           
            }).ToListAsync();
        return Ok(producto);}
    }
}
