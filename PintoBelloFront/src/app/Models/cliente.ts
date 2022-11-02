import { Barrios } from "./barrios";

export class Cliente {
    idCliente : number;
    nombre : string;
    apellido :string;
    dni : string;
    telefono : string;
    mail : string;
    fechNac : string;
    idBarrios : number;
    barrio? : Barrios
}
