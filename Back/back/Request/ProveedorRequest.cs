namespace PintoBello_API.Request;

public class ProveedorRequest
{
    public string Nombre { get; set; } = null!;
    public string Apellido { get; set; } = null!;
    public string Dni { get; set; } = null!;
    public string Telefono { get; set; } = null!;
    public string Mail { get; set; } = null!;
}

public class ProveedorEditRequest
{
    public string Nombre { get; set; } = null!;
    public string Apellido { get; set; } = null!;
    public string Telefono { get; set; } = null!;
    public string Mail { get; set; } = null!;
}