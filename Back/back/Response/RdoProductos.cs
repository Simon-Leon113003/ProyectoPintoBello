namespace PintoBello_API.Response;

public class RdoProductos
{
    public List<RdoProd> listaProductos { get; set; } = new List<RdoProd>();
}

public class RdoProductoss
{
    public List<RdoListaP> listaProd { get; set; } = new List<RdoListaP>();
}
public class RdoListaP
{
    public int stock { get; set;}
    public string Nombre { get; set; } = null!;
    public int IdMarca { get; set; }
    public double? Tamano { get; set; } = null!;
    public string TipoProducto { get; set; } = null!;
    public string Proveedor { get; set; } = null!;
}

public class RdoProd
{
    public int IdProducto { get; set; }
    public string Nombre { get; set; } = null!;
    public string Marca { get; set; }
    public DateTime FechaVencimineto { get; set; }
    public double? Tamano { get; set; }
    public string TipoProducto { get; set; } = null!;
    public string Proveedor { get; set; } = null!;
    public double? Precio { get; set; }
     public double? PrecioCompra { get; set; }
    public int? Stock { get; set; }
}

public class RdoMarca{
     public int IdMarca { get; set; }
    public string? Descripcion { get; set; }
}