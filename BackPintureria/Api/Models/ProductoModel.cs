using System;
namespace Api.Models;

public class ProductoModel
{
        public uint IdProducto { get; set; }
        public string Nombre { get; set; } = null!;
        public string Marca { get; set; } = null!;
        public DateTime FechaVencimineto { get; set; }
        public string Tamaño { get; set; } = null!;
   
        public ProveedorModel? Proveedor {get;set;}
        public MarcaModel? MarcaBd {get;set;}

        public TipoProductoModels? TipoProducto{get;set;}
}
