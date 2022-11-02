import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/Models/cliente';
import { Detalle } from 'src/app/Models/detalle';
import { Empleado } from 'src/app/Models/Empleado';
import { FormasPago } from 'src/app/Models/FormasPago';
import { Pedido } from 'src/app/Models/pedido';
import { Producto } from 'src/app/Models/producto';
import { ClienteService } from 'src/app/Services/cliente.service';
import { EmpleadoService } from 'src/app/Services/empleado.service';
import { FormasPagoService } from 'src/app/Services/formas-pago.service';
import { PedidoService } from 'src/app/Services/pedido.service';
import { ProductoService } from 'src/app/Services/producto.service';

@Component({
  selector: 'app-alta-pedido',
  templateUrl: './alta-pedido.component.html',
  styleUrls: ['./alta-pedido.component.css']
})
export class AltaPedidoComponent implements OnInit ,OnDestroy{
listClientes : Cliente[];
listProductos : Producto[];
listFormasPago : FormasPago[];
listEmpleado : Empleado[];

 pedido : Pedido;

 idEmpleado : number;
 idFormasPago : number;
 idProducto : number;

 cantidad : number;
 precioUnitario : number;


 detalle : Detalle;
 detalles : Detalle[];
 private subscription = new Subscription(); 

  constructor(private pedidoServices : PedidoService,private clienteService : ClienteService ,
             private productoServices : ProductoService ,private empleadoService : EmpleadoService ,
             private formasPagoServices : FormasPagoService ,  private router: Router) { 
    this.detalles = [];
     //this.pedido = {idCliente : 3 , fecha : '12/05/2022' , detalles : [] }
     this.pedido = {} as Pedido;
     
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.listarClientes();
    this.listarProductos();
    this.listarEmpleado();
    this.listarFormasDePago();
  }

 listarFormasDePago(){
  return this.subscription.add(this.formasPagoServices.getFormasPago().subscribe(data=>{
    this.listFormasPago = data;
    //console.log(this.listFormasPago);
  }));
 } 
listarEmpleado(){
  return this.subscription.add(this.empleadoService.getEmpleados().subscribe(data=>{
      this.listEmpleado = data;
   

  }));
}
 listarClientes(){

  return this.subscription.add(this.clienteService.getClientes().subscribe(data=>{
        this.listClientes = data;
        //console.log(this.listClientes);
    }))
  }
  listarProductos(){
    
    return this.subscription.add(this.productoServices.getProducto().subscribe(data=>{
     this.listProductos = data;
   
 }))
}
  agregarDetalles(){
    this.detalle = {
    cantidad : this.cantidad,
    precioUnitario : this.precioUnitario,
    importe : this.cantidad * this.precioUnitario,
    idProducto : this.idProducto}
    console.log(this.detalle)
    this.detalles.push(this.detalle);
  }
  agregarPedido(){
 
    this.pedido.detalles = this.detalles;
    
    console.log(this.pedido);
    this.pedidoServices.agregarPedido(this.pedido).subscribe({
      next : () =>{
        
      alert ("Ingreso Exitoso Venta ");
   
      },
       error : () =>{
        alert("No se concreto la Venta");
      //   alert(e.errors.detalle[0]);
      //   console.log(e.errors.detalle[0]);
        }
     });
  }
  cancelar() {
    this.router.navigate(['']);
  }
}
