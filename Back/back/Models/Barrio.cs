using System;
using System.Collections.Generic;

namespace back.Models
{
    public partial class Barrio
    {
        public Barrio()
        {
            Clientes = new HashSet<Cliente>();
        }

        public int IdBarrios { get; set; }
        public string Descripcion { get; set; } = null!;
        public bool? Activo { get; set; }

        public virtual ICollection<Cliente> Clientes { get; set; }
    }
}
