namespace PintoBello_API.Request;

public class ProductoRequest
{
    public string Nombre { get; set; } = null!;
    public double? Tamano { get; set; } 
    public int IdMarca { get; set; }
    public int IdTipoProducto { get; set; }
    public int IdProveedor { get; set; }
    public double Precio { get; set; }
}

public class ProductoEditRequest{
    public int IdProducto { get; set; }
    public int? Stock { get; set; }
     public double? PrecioCompra { get; set; }
}