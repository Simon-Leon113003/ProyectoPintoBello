using System;
using System.Collections.Generic;

namespace back.Models
{
    public partial class Factura
    {
        public Factura()
        {
            DetalleFacturas = new HashSet<DetalleFactura>();
            Pedidos = new HashSet<Pedido>();
        }

        public int IdFactura { get; set; }
        public int IdCliente { get; set; }
        public int IdEmpleado { get; set; }
        public int IdFormasPago { get; set; }
        public DateTime Fecha { get; set; }
        public decimal Total { get; set; }
        public bool? Activo { get; set; }

        public virtual Cliente IdClienteNavigation { get; set; } = null!;
        public virtual Empleado IdEmpleadoNavigation { get; set; } = null!;
        public virtual FormasPago IdFormasPagoNavigation { get; set; } = null!;
        public virtual ICollection<DetalleFactura> DetalleFacturas { get; set; }
        public virtual ICollection<Pedido> Pedidos { get; set; }
    }
}
