namespace Api.Request;

public class ClienteRequest
{
        public uint IdCliente{get;set;}
       public string Nombre { get; set; } = null!;
        public string Apellido { get; set; } = null!;
        public string Dni { get; set; } = null!;
        public string Telefono { get; set; } = null!;
        public string Mail { get; set; } = null!;
        // public DateOnly FechNac { get; set; }
        public DateTime FechNac { get; set; }
        public uint IdBarrios { get; set; }
}
