using System;
using System.ComponentModel.DataAnnotations;

namespace Api.Request;

public class FacturaRequest
{
    
        public uint IdCliente { get; set; }
        public uint IdEmpleado { get; set; }
        public uint IdFormasPago { get; set; }
        public DateTime Fecha { get; set; }

        [Required]
        [MinLength(1,ErrorMessage ="Deben existir Detalles")]
        public List<Detalles>? Detalles {get;set;}

        public FacturaRequest(){
            this.Detalles = new List<Detalles>();
        }
}

public class Detalles {

      public uint IdFactura { get; set; }
      public int Cantidad { get; set; }
      public decimal PrecioUnitario { get; set; }
      public decimal Importe { get; set; }
      public uint IdProducto { get; set; }

}