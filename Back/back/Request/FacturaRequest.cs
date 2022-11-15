using System.ComponentModel.DataAnnotations;

namespace PintoBello_API.Request;

public class FacturaRequest
{
    public int IdCliente { get; set; }
    public int IdEmpleado { get; set; }
    public int IdFormasPago { get; set; }

    [Required]
    [MinLength(1, ErrorMessage = "Deben existir Detalles")]
    public List<Detalles>? Detalles { get; set; }

    public FacturaRequest()
    {
        this.Detalles = new List<Detalles>();
    }
}

public class Detalles
{

    public int Cantidad { get; set; }
    public decimal PrecioUnitario { get; set; }
    public int IdProducto { get; set; }

}

public class DetallesRdo
{

    public int Cantidad { get; set; }
    public decimal PrecioUnitario { get; set; }
    public string Producto { get; set; }

}

public class FacturaRdo{
    public int IdFactura { get; set; }
    public string Cliente { get; set; }
    public string Empleado { get; set; }
    public string FormasPago { get; set; }
    public DateTime Fecha { get; set; }
    public decimal Total { get; set; }
    public List<DetallesRdo>? Detalles { get; set; }
        public FacturaRdo()
    {
        this.Detalles = new List<DetallesRdo>();
    }
}