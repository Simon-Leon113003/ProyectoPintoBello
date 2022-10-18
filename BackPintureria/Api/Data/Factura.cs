using System;
using System.Collections.Generic;

namespace Api.Data
{
    public partial class Factura
    {
        public Factura()
        {
            DetalleFacturas = new HashSet<DetalleFactura>();
            Pedidos = new HashSet<Pedido>();
        }

        public uint IdFactura { get; set; }
        public uint IdCliente { get; set; }
        public uint IdEmpleado { get; set; }
        public uint IdFormasPago { get; set; }
        public DateTime Fecha { get; set; }
        public decimal Total { get; set; }

        public virtual Cliente IdClienteNavigation { get; set; } = null!;
        public virtual Empleado IdEmpleadoNavigation { get; set; } = null!;
        public virtual FormasPago IdFormasPagoNavigation { get; set; } = null!;
        public virtual ICollection<DetalleFactura> DetalleFacturas { get; set; }
        public virtual ICollection<Pedido> Pedidos { get; set; }
    }
}
