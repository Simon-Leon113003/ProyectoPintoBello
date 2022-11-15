import { Component, OnInit, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AltaCliente } from 'src/app/models/altas/AltaCliente';
import { Barrio } from 'src/app/models/Barrio';
import { BarrioService } from 'src/app/services/barrio.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  cliente: AltaCliente = new AltaCliente();
  form: FormGroup
  barrios: Barrio[] = []

  constructor(private clienteService: ClienteService, private builder: FormBuilder, private barrioService: BarrioService) { }

  ngOnInit(): void {
    this.getBarrios()

    this.form = this.builder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      telefono: ['', Validators.required],
      mail: ['', Validators.required],
      fechaNac: [''],
      idBarrios: [0, Validators.required],

    })
  }

  postCliente(){
    if(this.form.invalid){
      alert("Complete todos campos")
      return
    }
    this.cliente.nombre = this.form.controls['nombre'].value
    this.cliente.apellido = this.form.controls['apellido'].value
    this.cliente.dni = this.form.controls['dni'].value
    this.cliente.telefono = this.form.controls['telefono'].value
    this.cliente.mail = this.form.controls['mail'].value
    this.cliente.fechaNac = this.form.controls['fechaNac'].value
    this.cliente.idBarrios = parseInt(this.form.controls['idBarrios'].value)

    this.clienteService.postCliente(this.cliente).subscribe({
      next: (r: boolean) => {alert("Exito")},
      error: (e) => console.log(e.error)
    })
  }

  getBarrios(){
    this.barrioService.getBarrios().subscribe({
      next:(r:Barrio[])=> {this.barrios = r},
      error: (e) => alert(e.error)
    })
  }

}
