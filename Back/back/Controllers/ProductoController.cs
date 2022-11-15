using System.Runtime.InteropServices;
using System;
namespace PintoBello_API.Controllers;

using back.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PintoBello_API.Request;
using PintoBello_API.Response;

public class ProductoController : ControllerBase
{
    private readonly pintureriaContext _context;

    public ProductoController(pintureriaContext context)
    {
        _context = context;
    }

    [HttpGet]
    [Route("api/productos/listado")]
    public async Task<ActionResult<RdoProductoss>> getProductos()
    {
        try
        {
            var result = new RdoProductoss();
            var productos = await _context.Productos.Where(c=> c.Activo == true).Include(c => c.IdMarcaNavigation).Include(c => c.IdProveedorNavigation).
            Include(c => c.IdTipoProductoNavigation).ToListAsync();

            var pr = productos.Distinct().ToArray();
            var cantidad = pr.Length;

            if (pr != null)
            {
                //PARA QUE SE ENTIENDA: quiero agrupar todos los que tienen el mismo nombre, marca y tamano
                //para sacar stock porque en la base de datos no hay un campo con eso
                var prod = pr.GroupBy(x => new { x.Nombre, x.IdMarca, x.Tamano })
                .Select(g =>
                new RdoListaP
                {
                    IdMarca = g.Key.IdMarca,
                    Tamano = g.Key.Tamano,
                    Nombre = g.Key.Nombre,
                    stock = g.Count(),
                    TipoProducto = pr.Where(x =>x.Activo == true && x.Nombre == g.Key.Nombre &&
                     x.IdMarca == g.Key.IdMarca && x.Tamano == g.Key.Tamano).First().IdTipoProductoNavigation.Descripcion ?? "",
                    Proveedor = pr.Where(x => x.Nombre == g.Key.Nombre &&
                     x.IdMarca == g.Key.IdMarca && x.Tamano == g.Key.Tamano).First().IdProveedorNavigation.Nombre
                });
                result.listaProd = prod.ToList();
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

    [HttpGet]
    [Route("api/productos/listado/{nombre}+{marca}+{tam}")]
    public async Task<ActionResult<RdoProductos>> getProductosPorNombre(string nombre, int marca, int tam)
    {
        try
        {
            //Con esto quiero traer todos los productos que estén relacionados con un ítem de la lista anterior
            var result = new RdoProductos();
            var productos = await _context.Productos.Where(c =>c.Activo == true && c.Nombre.Equals(nombre) && c.IdMarca.Equals(marca)
            && c.Tamano.Equals(tam)).Include(c => c.IdMarcaNavigation).Include(c => c.IdProveedorNavigation).
            Include(c => c.IdTipoProductoNavigation).ToListAsync();

            if (productos != null)
            {
                foreach (var p in productos)
                {
                    var resultAux = new RdoProd
                    {
                        IdProducto = p.IdProducto,
                        Nombre = p.Nombre,
                        FechaVencimineto = p.FechaVencimineto,
                        Tamano = p.Tamano,
                        TipoProducto = p.IdTipoProductoNavigation.Descripcion,
                        Proveedor = p.IdProveedorNavigation.Nombre
                    };
                    result.listaProductos.Add(resultAux);
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

    [HttpGet]
    [Route("api/productos/getListado")]
    public async Task<ActionResult<List<RdoProd>>> getListaProductos()
    {
        try
        {
            var result = new List<RdoProd>();
            var productos = await _context.Productos.Where(c =>c.Activo == true).ToListAsync();

            if (productos != null)
            {
                foreach (var p in productos)
                {
                    var tipoP = await _context.TipoProductos.Where(t=> t.IdTipoProducto == p.IdTipoProducto).FirstAsync();
                    var marca = await _context.Marcas.Where(m=> m.IdMarca == p.IdMarca).FirstAsync();
                    var proveedor = await _context.Proveedors.Where(pr=> pr.IdProveedor == p.IdProveedor ).FirstAsync();
                    var resultAux = new RdoProd
                    {
                        IdProducto = p.IdProducto,
                        Nombre = p.Nombre,
                        Marca = marca.Descripcion,
                        FechaVencimineto = p.FechaVencimineto,
                        Tamano = p.Tamano,
                        TipoProducto = tipoP.Descripcion,
                        Proveedor = proveedor.Nombre + "-" + proveedor.Apellido,
                        Precio = p.Precio,
                        PrecioCompra = p.PrecioCompra,
                        Stock = p.Stock
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
            return BadRequest(e);
        }
    }

    [HttpPost]
    [Route("api/productos/alta")]
    public async Task<ActionResult<bool>> nuevoProducto([FromBody] ProductoRequest cmd)
    {
       try
        {
            var nuevo = new Producto()
            {
                Nombre = cmd.Nombre,
                FechaVencimineto = DateTime.Now,
                Tamano = cmd.Tamano,
                IdMarca = cmd.IdMarca,
                IdTipoProducto = cmd.IdTipoProducto,
                IdProveedor = cmd.IdProveedor,
                Activo = true,
                Precio = cmd.Precio,
                PrecioCompra = 0,
                Stock = 0
            };
            await _context.AddAsync(nuevo);
            await _context.SaveChangesAsync();

            return Ok(true);
        }
        catch (Exception e)
        {
            return BadRequest(e.Data);
        }
    }

        [HttpPut]
        [Route("api/productos/baja/{id}")]
        public async Task<ActionResult<bool>> deleteProducto(int id)
        {
            try
            {
                var producto = await _context.Productos.Where(c => c.IdProducto.Equals(id)).FirstOrDefaultAsync();
                if (producto != null)
                {
                    producto.Activo = false;

                    _context.Update(producto);
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

    [HttpPut]
    [Route("api/productos/put")]
    public async Task<ActionResult<bool>> putProducto([FromBody]ProductoEditRequest[] cmd){
        try
        {
            foreach (var p in cmd)
            {
                var producto = await _context.Productos.Where(pr=> pr.IdProducto == p.IdProducto).FirstAsync();
                if(producto != null){
                
                    producto.Stock = p.Stock;
                    producto.PrecioCompra = p.PrecioCompra;

                    _context.Update(producto);
                    await _context.SaveChangesAsync();
                }
            }
            return Ok(true);

        }
        catch (Exception e)
        {
            return BadRequest(e);
        }
    }



    //-----------------------------TIPO PRODUCTO-----------------------------//
    [HttpGet]
    [Route("api/tipoProducto/listado")]
    public async Task<ActionResult<List<RdoTipo>>> getTiposProd()
    {
        try
        {
            var result = new List<RdoTipo>();
            var tipos = await _context.TipoProductos.Where(t=> t.Activo == true).ToListAsync();

            if (tipos != null)
            {
                foreach (var t in tipos)
                {
                    var resultAux = new RdoTipo
                    {
                        IdTipoProducto = t.IdTipoProducto,
                        Descripcion = t.Descripcion
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
    [Route("api/tipoProducto/post")]
    public async Task<ActionResult<bool>> postTipoProd([FromBody]RdoTipo cmd)
    {
        try
        {
            var existe = await _context.TipoProductos.Where(t=> t.Activo == true && t.IdTipoProducto == cmd.IdTipoProducto && t.Descripcion.Equals(cmd.Descripcion)).ToListAsync();

            if (existe != null)
            {
                var result = new TipoProducto{
                    Descripcion = cmd.Descripcion,
                    Activo = true
                };

                await _context.TipoProductos.AddAsync(result);
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
            return BadRequest("No se puede realizar esta acción");
        }
    }

    [HttpPut]
        [Route("api/tipoProducto/baja/{id}")]
        public async Task<ActionResult<bool>> deleteTipoProducto(int id)
        {
            try
            {
                var tipoProducto = await _context.TipoProductos.Where(c => c.IdTipoProducto.Equals(id)).FirstOrDefaultAsync();
                if (tipoProducto != null)
                {
                    tipoProducto.Activo = false;

                    _context.Update(tipoProducto);
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

    //-----------------------------MARCA-----------------------------//
    [HttpGet]
    [Route("api/marca/listado")]
    public async Task<ActionResult<RdoMarca>> getMarcas()
    {
        try
        {
            var result = new List<RdoMarca>();
            var marcas = await _context.Marcas.Where(m=> m.Activo == true).ToListAsync();

            if (marcas != null)
            {
                foreach (var m in marcas)
                {
                    var resultAux = new RdoMarca
                    {
                        IdMarca = m.IdMarca,
                        Descripcion = m.Descripcion
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

    [HttpPut]
        [Route("api/marca/baja/{id}")]
        public async Task<ActionResult<bool>> deleteMarca(int id)
        {
            try
            {
                var marca = await _context.Marcas.Where(c => c.IdMarca.Equals(id)).FirstOrDefaultAsync();
                if (marca != null)
                {
                    marca.Activo = false;

                    _context.Update(marca);
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

