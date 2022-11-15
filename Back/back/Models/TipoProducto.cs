using System;
using System.Collections.Generic;

namespace back.Models
{
    public partial class TipoProducto
    {
        public TipoProducto()
        {
            Productos = new HashSet<Producto>();
        }

        public int IdTipoProducto { get; set; }
        public string? Descripcion { get; set; }
        public bool? Activo { get; set; }

        public virtual ICollection<Producto> Productos { get; set; }
    }
}
