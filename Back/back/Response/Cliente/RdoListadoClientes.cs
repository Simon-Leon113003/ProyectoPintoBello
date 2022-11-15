namespace PintoBello_API.Response.Cliente;

public class RdoListadoClientes
{
    public List<RdoCliente> listaClientes { get; set; } = new List<RdoCliente>();
}

public class RdoCliente
{
    public int id { get; set; }
    public string nombre { get; set; }
    public string apellido { get; set; }
    public string dni { get; set; }
    public string telefono { get; set; }
    public string mail { get; set; }
    public DateTime fechaNac { get; set; }
    public string barrio { get; set; }
}