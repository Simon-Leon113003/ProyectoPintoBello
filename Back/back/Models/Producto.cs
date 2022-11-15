using System;
using System.Collections.Generic;

namespace back.Models
{
    public partial class Producto
    {
        public Producto()
        {
            DetalleFacturas = new HashSet<DetalleFactura>();
        }

        public int IdProducto { get; set; }
        public string Nombre { get; set; } = null!;
        public DateTime FechaVencimineto { get; set; }
        public int IdMarca { get; set; }
        public int IdTipoProducto { get; set; }
        public int IdProveedor { get; set; }
        public bool? Activo { get; set; }
        public double? Precio { get; set; }
        public double? PrecioCompra { get; set; }
        public int? Stock { get; set; }
        public double? Tamano { get; set; }

        public virtual Marca IdMarcaNavigation { get; set; } = null!;
        public virtual Proveedor IdProveedorNavigation { get; set; } = null!;
        public virtual TipoProducto IdTipoProductoNavigation { get; set; } = null!;
        public virtual ICollection<DetalleFactura> DetalleFacturas { get; set; }
    }
}
