namespace PintoBello_API.Response;

public class RdoFormasPago
{
    public List<RdoFP> listaFormasPago { get; set; } = new List<RdoFP>();
}

public class RdoFP
{
    public int IdFormasPago { get; set; }
    public string Descripcion { get; set; } = null!;
}