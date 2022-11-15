using System;
using System.Collections.Generic;

namespace back.Models
{
    public partial class Pedido
    {
        public int IdPedido { get; set; }
        public string? Fecha { get; set; }
        public int IdFactura { get; set; }

        public virtual Factura IdFacturaNavigation { get; set; } = null!;
    }
}
