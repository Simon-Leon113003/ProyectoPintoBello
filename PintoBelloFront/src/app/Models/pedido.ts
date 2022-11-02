import { Detalle } from "./detalle";

export class Pedido {
    idCliente : number;
    idEmpleado : number;
    idFormasPago : number;
    fecha : string;
    detalles? : Detalle[];
   
}
