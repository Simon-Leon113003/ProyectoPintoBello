using System;
using System.Collections.Generic;

namespace back.Models
{
    public partial class DetalleFactura
    {
        public int IdDetalleFactura { get; set; }
        public int IdFactura { get; set; }
        public int Cantidad { get; set; }
        public decimal PrecioUnitario { get; set; }
        public decimal Importe { get; set; }
        public int IdProducto { get; set; }

        public virtual Factura IdFacturaNavigation { get; set; } = null!;
        public virtual Producto IdProductoNavigation { get; set; } = null!;
    }
}
