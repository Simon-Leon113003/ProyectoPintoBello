using System;
using System.Collections.Generic;

namespace Api.Data
{
    public partial class Producto
    {
        public Producto()
        {
            DetalleFacturas = new HashSet<DetalleFactura>();
        }

        public uint IdProducto { get; set; }
        public string Nombre { get; set; } = null!;
        public string Marca { get; set; } = null!;
        public DateTime FechaVencimineto { get; set; }
        public string Tamaño { get; set; } = null!;
        public uint IdMarca { get; set; }
        public uint IdTipoProducto { get; set; }
        public uint IdProveedor { get; set; }

        public virtual Marca IdMarcaNavigation { get; set; } = null!;
        public virtual Proveedor IdProveedorNavigation { get; set; } = null!;
        public virtual TipoProducto IdTipoProductoNavigation { get; set; } = null!;
        public virtual ICollection<DetalleFactura> DetalleFacturas { get; set; }
    }
}
