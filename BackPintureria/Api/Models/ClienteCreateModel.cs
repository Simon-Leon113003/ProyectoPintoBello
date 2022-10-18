namespace Api.Models;

public class ClienteCreateModel
{
        public string Nombre { get; set; } = null!;
        public string Apellido { get; set; } = null!;
        public string Dni { get; set; } = null!;
        public string Telefono { get; set; } = null!;
        public string Mail { get; set; } = null!;
        public DateTime FechNac { get; set; }   
         public int IdBarrios { get; set; }

        public BarrioModel? Barrio{get;set;}
}
