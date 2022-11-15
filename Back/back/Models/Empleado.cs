using System;
using System.Collections.Generic;

namespace back.Models
{
    public partial class Empleado
    {
        public Empleado()
        {
            Facturas = new HashSet<Factura>();
        }

        public int IdEmpleado { get; set; }
        public int IdTipoEmpleado { get; set; }
        public string Legajo { get; set; } = null!;
        public string Nombre { get; set; } = null!;
        public string Apellido { get; set; } = null!;
        public string Dni { get; set; } = null!;
        public string Telefono { get; set; } = null!;
        public string Mail { get; set; } = null!;
        public string Usuario { get; set; } = null!;
        public string Contrasena { get; set; } = null!;
        public bool? Activo { get; set; }

        public virtual TipoEmpleado IdTipoEmpleadoNavigation { get; set; } = null!;
        public virtual ICollection<Factura> Facturas { get; set; }
    }
}
