import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Barrios } from 'src/app/Models/barrios';
import { Cliente } from 'src/app/Models/cliente';
import { BarrioService } from 'src/app/Services/barrio.service';
import { ClienteService } from 'src/app/Services/cliente.service';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit ,OnDestroy {
  listaCliente : Cliente[] = [];

  private subscription = new Subscription();

  constructor(private clienteService : ClienteService,private barrioService : BarrioService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  
  }

  ngOnInit(): void {
    this.actualizarListado();
  }

  actualizarListado(){
   this.subscription.add(this.clienteService.getClientes().subscribe({
      next : (listado : Cliente[])=>{
        //exito
        this.listaCliente = listado;
       // console.log(this.listaCliente);
      },
      error : () =>{
        //error
        alert('Error 404')
      }
    }));}

}
