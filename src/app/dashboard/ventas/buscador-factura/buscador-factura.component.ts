import { Component, OnInit } from '@angular/core';
import { Factura, GetFacturas } from 'src/app/models/altas/AltaFactura';
import { Cliente } from 'src/app/models/Cliente';
import { Empleado } from 'src/app/models/Empleado';
import { ClienteService } from 'src/app/services/cliente.service';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { VentaService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-buscador-factura',
  templateUrl: './buscador-factura.component.html',
  styleUrls: ['./buscador-factura.component.css']
})
export class BuscadorFacturaComponent implements OnInit {

  facturas: GetFacturas[] = []
  facturas1: GetFacturas[] = []
  clientes: string[] = []


  constructor(private service: VentaService) { }


  ngOnInit(): void {
    this.service.getFacturas().subscribe({
      next:(r:GetFacturas[])=> {this.facturas = r, console.log(this.facturas)},
      error:(e)=> console.log(e.error)
    })
  }

  verTodo(){
    this.facturas1 = this.facturas
  }

  buscarCliente(value: any){
    for (let i = 0; i < this.facturas.length; i++) {
      const e = this.facturas[i];
      if(e.cliente.toLowerCase().includes(value.toLowerCase()) ){
        this.clientes.push(e.cliente)
      }
    }
  }

  cargarCliente(){

  }

  borrarArray(){
    
  }
  



}
