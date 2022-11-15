namespace PintoBello_API.Response;

public class RdoTipoProducto
{
    public List<RdoTipo> listaFormasPago { get; set; } = new List<RdoTipo>();
}

public class RdoTipo
{
    public int IdTipoProducto { get; set; }
    public string? Descripcion { get; set; }
}
