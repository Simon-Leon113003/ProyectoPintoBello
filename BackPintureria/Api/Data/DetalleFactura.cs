using System;
using System.Collections.Generic;

namespace Api.Data
{
    public partial class DetalleFactura
    {
        public uint IdDetalleFactura { get; set; }
        public uint IdFactura { get; set; }
        public int Cantidad { get; set; }
        public decimal PrecioUnitario { get; set; }
        public decimal Importe { get; set; }
        public uint IdProducto { get; set; }

        public virtual Factura IdFacturaNavigation { get; set; } = null!;
        public virtual Producto IdProductoNavigation { get; set; } = null!;
    }
}
