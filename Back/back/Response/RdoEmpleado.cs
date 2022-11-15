namespace PintoBello_API.Response;

public class RdoEmpleado
{
    public List<RdoEmplUnico> empleadosLista { get; set; } = new List<RdoEmplUnico>();
}

public class RdoEmplUnico
{
    public int IdEmpleado { get; set; }
    public string tipoEmpleado { get; set; } = null!;
    public string Legajo { get; set; } = null!;
    public string Nombre { get; set; } = null!;
    public string Apellido { get; set; } = null!;
    public string Dni { get; set; } = null!;
    public string Telefono { get; set; } = null!;
    public string Mail { get; set; } = null!;
    public string Usuario { get; set; } = null!;
}