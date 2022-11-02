import { TipoEmpleado } from "./TipoEmpleado";

export class Empleado{
    idEmpleado: number;
    legajo : string;
    nombre :  string;
    apellido : string;
    telefono : string;
    mail : string;
    tipoEmp? : TipoEmpleado;

}