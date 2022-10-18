namespace Api.Models;

public class EmpleadoModels
{
        public uint IdEmpleado { get; set; }
        public string Legajo { get; set; } = null!;
        public string Nombre { get; set; } = null!;
        public string Apellido { get; set; } = null!;
        public string Telefono { get; set; } = null!;
        public string Mail { get; set; } = null!;

        public TipoEmpleadoModel? TipoEmp {get;set;}
}
