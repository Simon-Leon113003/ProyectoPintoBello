using System;
using System.Collections.Generic;

namespace Api.Data
{
    public partial class FormasPago
    {
        public FormasPago()
        {
            Facturas = new HashSet<Factura>();
        }

        public uint IdFormasPago { get; set; }
        public string Descripcion { get; set; } = null!;

        public virtual ICollection<Factura> Facturas { get; set; }
    }
}
