import { Producto } from "../Producto"

export class Factura{
    idCliente: number
    idEmpleado: number
    idFormasPago: number
    detalles: Detalles[] = []


}
export class Detalles{
    cantidad: number
    precioUnitario: number
    idProducto: number

}

export class AgregraDetalle{
    producto: Producto
    cantidad: number
}

export class GetFacturas{
    idFactura: number
    cliente: string
    empleado: string
    formasPago: string
    fecha: Date
    total: number
    detalles: DetallesGet[] = []
}

export class DetallesGet{
    cantidad: number
    precioUnitario: number
    Producto: string

}