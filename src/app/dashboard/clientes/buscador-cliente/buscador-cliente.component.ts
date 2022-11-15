import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-buscador-cliente',
  templateUrl: './buscador-cliente.component.html',
  styleUrls: ['./buscador-cliente.component.css']
})
export class BuscadorClienteComponent implements OnInit {

  Clientes: Cliente[]
  Clientes1: Cliente[]
  Clientes2: Cliente[]
  form: FormGroup;

  constructor(private clienteService: ClienteService, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.Clientes = []
    this.Clientes1 = []
    this.Clientes2 = []
    this.getClientes();

    this.form = this.builder.group({
      Cliente: ['']
    })
  }

  getClientes(){
    this.clienteService.getClientes().subscribe({
      next:(r: Cliente[]) => {this.Clientes1 = r},
      error: (e) => console.log(e)
    })
  }

  buscar(value: any){
    this.Clientes2.splice(0, this.Clientes2.length)

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

  borrarArray(){
    this.Clientes.splice(0, this.Clientes.length)
  }

  cargarCliente(e: Cliente){
    this.form.controls['Cliente'].setValue(e.nombre + " " + e.apellido);
    this.Clientes.splice(0, this.Clientes.length)
    this.cargarTabla(e)
  }

  cargarTabla(e: Cliente){
    this.Clientes2.push(e)
  }

  verTodos(){
    this.Clientes2.splice(0, this.Clientes2.length)
    for (let index = 0; index < this.Clientes1.length; index++) {
      const e = this.Clientes1[index];
      this.Clientes2.push(e)
    }
  }

  eliminar(c: Cliente){
    if(confirm("Seguro que desea eliminar a " + c.nombre + " " + c.apellido)){
      this.clienteService.deleteCliente(c.id).subscribe({
        next:(r: boolean) => { alert("Cliente eliminado"), this.ngOnInit(), this.verTodos()},
        error:(e) => console.log(e)
      })
    }
    
  }

}
