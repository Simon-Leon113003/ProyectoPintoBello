using System;
using System.Collections.Generic;

namespace back.Models
{
    public partial class Marca
    {
        public Marca()
        {
            Productos = new HashSet<Producto>();
        }

        public int IdMarca { get; set; }
        public string? Descripcion { get; set; }
        public bool? Activo { get; set; }

        public virtual ICollection<Producto> Productos { get; set; }
    }
}
