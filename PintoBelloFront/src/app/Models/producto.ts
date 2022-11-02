import { MarcaBD } from "./MarcaBD";
import { Proveedor } from "./Proveedor";
import { TipoProducto } from "./TipoProducto";

export class Producto {
    idProducto : string;
    nombre :string;
    fechaVencimineto : Date;
   // tamaño : string;
    proveedor? : Proveedor;
    tipoProducto? : TipoProducto;
    marcaBd? : MarcaBD;

}

