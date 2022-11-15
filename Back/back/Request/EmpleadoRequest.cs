namespace PintoBello_API.Request;

public class EmpleadoRequest
{
    public int IdTipoEmpleado { get; set; }
    public string Legajo { get; set; } = null!;
    public string Nombre { get; set; } = null!;
    public string Apellido { get; set; } = null!;
    public string Dni { get; set; } = null!;
    public string Telefono { get; set; } = null!;
    public string Mail { get; set; } = null!;
    public string Usuario { get; set; } = null!;
    public string Contrasena { get; set; } = null!;
}

public class EmpleadoEditRequest
{
    public string Nombre { get; set; } = null!;
    public string Apellido { get; set; } = null!;
    public string Telefono { get; set; } = null!;
    public string Mail { get; set; } = null!;
}

public class EmpleadoPassRequest
{
    public string Usuario { get; set; } = null!;
    public string Contrasena { get; set; } = null!;
}

public class TipoEmpleadosRequest
{
    public int IdTipoEmpleado { get; set; }
    public string Tipo { get; set; }
}