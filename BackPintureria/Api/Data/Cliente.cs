using System;
using System.Collections.Generic;

namespace Api.Data
{
    public partial class Cliente
    {
        public Cliente()
        {
            Facturas = new HashSet<Factura>();
        }

        public uint IdCliente { get; set; }
        public string Nombre { get; set; } = null!;
        public string Apellido { get; set; } = null!;
        public string Dni { get; set; } = null!;
        public string Telefono { get; set; } = null!;
        public string Mail { get; set; } = null!;
        // public DateOnly FechNac { get; set; }
        public DateTime FechNac { get; set; }
        public uint IdBarrios { get; set; }

        public virtual Barrio IdBarriosNavigation { get; set; } = null!;
        public virtual ICollection<Factura> Facturas { get; set; }
    }
}
