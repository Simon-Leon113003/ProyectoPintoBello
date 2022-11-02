import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Barrios } from 'src/app/Models/barrios';
import { Cliente } from 'src/app/Models/cliente';
import { BarrioService } from 'src/app/Services/barrio.service';
import { ClienteService } from 'src/app/Services/cliente.service';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit , OnDestroy {
  listBarrios : Barrios [] = [];
  cliente : Cliente 
  idBarrios : number;
  private subscription = new Subscription();
  constructor(private clienteService : ClienteService,private barrioService : BarrioService,private router: Router) {
   
   }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.cliente = {} as Cliente;
    this.listarBarrios();
   //this.actualizarListadoBarrios();
  }


   listarBarrios(){
    
       return this.subscription.add(this.barrioService.getBarrio().subscribe(data=>{
       this.listBarrios = data;
        console.log(this.listBarrios);
  }))
   }
 

  guardarCliente(){
  
    console.log(this.cliente);
    this.clienteService.agregar(this.cliente).subscribe({
      next : () =>{
      alert ("Ingreso exitoso");
   
      },
      error : () =>{
        alert('error');
      }
    });
  }

  
  cancelar() {
    this.router.navigate(['']);
  }
}
