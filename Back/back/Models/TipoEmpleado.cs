using System;
using System.Collections.Generic;

namespace back.Models
{
    public partial class TipoEmpleado
    {
        public TipoEmpleado()
        {
            Empleados = new HashSet<Empleado>();
        }

        public int IdTipoEmpleado { get; set; }
        public string Tipo { get; set; } = null!;
        public bool? Activo { get; set; }

        public virtual ICollection<Empleado> Empleados { get; set; }
    }
}
