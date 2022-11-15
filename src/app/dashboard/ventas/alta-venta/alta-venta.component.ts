import { Component, OnInit, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgregraDetalle, Detalles, Factura } from 'src/app/models/altas/AltaFactura';
import { Cliente } from 'src/app/models/Cliente';
import { Empleado } from 'src/app/models/Empleado';
import { Producto } from 'src/app/models/Producto';
import { ClienteService } from 'src/app/services/cliente.service';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { ProductoService } from 'src/app/services/producto.service';
import { VentaService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-alta-venta',
  templateUrl: './alta-venta.component.html',
  styleUrls: ['./alta-venta.component.css']
})
export class AltaVentaComponent implements OnInit {

  form: FormGroup;
  buscador = '';
  productos: Producto[] = [];
  productos1: Producto[] = [];
  Clientes: Cliente[] = [];
  Clientes1: Cliente[] = [];
  empleados: Empleado[] = [];
  empleados1: Empleado[] = [];
  formasPago: string[] = [];
  detalles: AgregraDetalle[] = [];
  producto: Producto;
  total: number = 0
  totalDC: number = 0
  cobrar: number = 0
  idC = 0
  idE = 0
  idP = 0

  constructor(private productoService: ProductoService, private clienteService: ClienteService, private builder: FormBuilder, private empleadoService: EmpleadoService, private service: VentaService) { }

  ngOnInit(): void {
    this.getProductos()
    this.getClientes()
    this.getEmpleados()

    this.formasPago[0] = "Seleccione una opción"
    this.formasPago[1] = "Efectivo"
    this.formasPago[2] = "Credito/Debito"
    this.formasPago[3] = "Mercado Pago"

    this.form = this.builder.group({
      cliente: ['', Validators.required],
      vendedor: ['', Validators.required],
      producto: ['', Validators.required],
      formaPago: [0, Validators.required],
      cantidad: [0, Validators.required],
      total: [0, Validators.required]
  })
  }

  agregarDetalle(){
    var p = new AgregraDetalle();
    p.producto = this.producto
    p.cantidad = this.form.controls['cantidad'].value 

    this.detalles.push(p)
    this.total += p.producto.precio * p.cantidad
    this.form.controls['total'].setValue(this.total)
  }

  agregarFactura(){
    if(!confirm("¿Confirmar venta?")){
      return
    }
  
    var factura = new Factura()
    factura.idCliente = this.idC
    factura.idEmpleado= this.idE
    factura.idFormasPago = this.form.controls['formaPago'].value

    for (let i = 0; i < this.detalles.length; i++) {
      const d = this.detalles[i];
      var deta = new Detalles()
      deta.cantidad = d.cantidad
      deta.precioUnitario = d.producto.precio
      deta.idProducto = d.producto.idProducto

      factura.detalles.push(deta)

    }
    console.log(factura)
    this.service.postFactura(factura).subscribe({
      next: (r: boolean) => {if(r){alert("exito")}},
      error:(e)=> console.log(e.error)
    })
  }

  cobrarFactura(){
    this.cobrar  = this.form.controls['formaPago'].value
    this.totalDC = Math.round(this.total * 1.10) 

  }

  /*BUSCADOR DE PRODUCTOS*/ 
  getProductos(){
    this.productoService.getProductos().subscribe({
      next:(r: Producto[]) => {this.productos1 = r},
      error: (e) => console.log(e)
    })
  }

  buscar(value: any){
    if(value == "" || value == " "){
      this.productos.splice(0, this.productos.length)
      return
    }
    for (let index = 0; index < this.productos1.length; index++) {
      if(this.productos1[index].nombre.toLowerCase().includes(value.toLowerCase())){
        this.productos.push(this.productos1[index])
      }
      else{
        this.productos.splice(index, 1)
      }

      
    }
  }

  borrarArray(){
    this.productos.splice(0, this.productos.length)
  }

  cargarProducto(p: string, pr: Producto){
    this.producto = new Producto();
    this.producto = pr
    this.form.controls['producto'].setValue(p);
    this.productos.splice(0, this.productos.length)
  }


  /*BUSCADOR CLIENTES*/
  getClientes(){
    this.clienteService.getClientes().subscribe({
      next:(r: Cliente[]) => {this.Clientes1 = r},
      error: (e) => console.log(e)
    })
  }

  buscarC(value: any){

    if(value == "" || value == " "){
      this.Clientes.splice(0, this.Clientes.length)
      return
    }

    for (let index = 0; index < this.Clientes1.length; index++) {
      const e = this.Clientes1[index];

      if(e.nombre.toLowerCase().includes(value.toLowerCase()) || e.apellido.toLowerCase().includes(value.toLowerCase())){
        this.Clientes.push(e)
      }
      else{
        this.Clientes.splice(index, 1)
      }
    }
    
  }

  borrarArrayC(){
    this.Clientes.splice(0, this.Clientes.length)
  }

  cargarCliente(e: Cliente){
    this.idC = 0
    this.form.controls['cliente'].setValue(e.nombre + " " + e.apellido);
    this.Clientes.splice(0, this.Clientes.length)
    this.idC = e.id

  }

  /*BUSCADOR EMPLEADOS*/
  getEmpleados(){
    this.empleadoService.getEmpleados().subscribe({
      next:(r: Empleado[]) => {for (let i = 0; i < r.length; i++) {
        var v = r[i];
        if(v.tipoEmpleado == "Vendedor"){
          this.empleados1.push(v)
        }
        
      }},
      error: (e) => console.log(e)
    })
  }

  buscarE(value: any){

    if(value == "" || value == " "){
      this.empleados.splice(0, this.empleados.length)
      return
    }

    for (let index = 0; index < this.empleados1.length; index++) {
      const e = this.empleados1[index];

      if(e.nombre.toLowerCase().includes(value.toLowerCase()) || e.apellido.toLowerCase().includes(value.toLowerCase())){
        this.empleados.push(e)
      }
      else{
        this.empleados.splice(index, 1)
      }
    }
    
  }

  borrarArrayE(){
    this.empleados.splice(0, this.empleados.length)
  }

  cargarEmpleado(e: Empleado){
    this.idE = 0
    this.form.controls['vendedor'].setValue(e.nombre + " " + e.apellido);
    this.empleados.splice(0, this.empleados.length)
    this.idE = e.idEmpleado
  }
}
