namespace PintoBello_API.Response;

public class RdoPedido
{
    public string Empleado { get; set; }
    public string Cliente { get; set; }
    public DateTime Fecha { get; set; }
    public List<RdoPed> listaPedidos { get; set; } = new List<RdoPed>();
}

public class RdoPed
{
    public int Cantidad { get; set; }
    public string Producto { get; set; }
}