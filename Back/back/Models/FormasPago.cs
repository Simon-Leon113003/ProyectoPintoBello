using System;
using System.Collections.Generic;

namespace back.Models
{
    public partial class FormasPago
    {
        public FormasPago()
        {
            Facturas = new HashSet<Factura>();
        }

        public int IdFormasPago { get; set; }
        public string Descripcion { get; set; } = null!;

        public virtual ICollection<Factura> Facturas { get; set; }
    }
}
