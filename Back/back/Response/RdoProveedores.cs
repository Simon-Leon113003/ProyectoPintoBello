namespace PintoBello_API.Response;

public class RdoProveedores
{
    public List<RdoProvId> listaProveedores { get; set; } = new List<RdoProvId>();
}

public class RdoProv
{
    public string Nombre { get; set; } = null!;
    public string Apellido { get; set; } = null!;
    public string Dni { get; set; } = null!;
    public string Telefono { get; set; } = null!;
    public string Mail { get; set; } = null!;
}

public class RdoProvId
{
     public int IdProveedor { get; set; }
    public string Nombre { get; set; } = null!;
    public string Apellido { get; set; } = null!;
    public string Dni { get; set; } = null!;
    public string Telefono { get; set; } = null!;
    public string Mail { get; set; } = null!;
}