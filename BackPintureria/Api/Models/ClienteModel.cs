using System;
namespace Api.Models;

public class ClienteModel
{
    
        public uint IdCliente { get; set; }
        public string Nombre { get; set; } = null!;
        public string Apellido { get; set; } = null!;
        public string Dni { get; set; } = null!;
        public string Telefono { get; set; } = null!;
        public string Mail { get; set; } = null!;
        public DateTime FechNac { get; set; }   

        public BarrioModel? Barrio{get;set;}
}
