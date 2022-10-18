using System;
using System.Collections.Generic;

namespace Api.Data
{
    public partial class TipoEmpleado
    {
        public TipoEmpleado()
        {
            Empleados = new HashSet<Empleado>();
        }

        public uint IdTipoEmpleado { get; set; }
        public string Tipo { get; set; } = null!;

        public virtual ICollection<Empleado> Empleados { get; set; }
    }
}
