using System;
using System.Collections.Generic;

namespace Api.Data
{
    public partial class Pedido
    {
        public uint IdPedido { get; set; }
        public string? Fecha { get; set; }
        public uint IdFactura { get; set; }

        public virtual Factura IdFacturaNavigation { get; set; } = null!;
    }
}
