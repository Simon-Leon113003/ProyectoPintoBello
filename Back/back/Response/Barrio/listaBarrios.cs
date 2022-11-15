namespace PintoBello_API.Response.Barrio;

public class listaBarrios
{
    public List<RdoBarrio> barriosLista { get; set; } = new List<RdoBarrio>();
}

public class RdoBarrio
{
    public int id { get; set; }
    public string descripcion { get; set; }
}