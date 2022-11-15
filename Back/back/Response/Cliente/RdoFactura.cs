namespace PintoBello_API.Response.Cliente;

public class RdoFactura
{
    public int IdFactura { get; set; }
    public string Empleado { get; set; }
    public string Cliente { get; set; }
    public string FormaPago { get; set; }
    public List<RdoDetalle> listaDetalles { get; set; } = new List<RdoDetalle>();
    public decimal Total { get; set; }
}

public class RdoDetalle
{
    public int Cantidad { get; set; }
    public decimal PrecioUnitario { get; set; }
    public decimal Importe { get; set; }
    public string Producto { get; set; }
}