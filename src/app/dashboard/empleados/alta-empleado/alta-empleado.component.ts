import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AltaEmpleado } from 'src/app/models/altas/AltaEmpleado';
import { TipoEmpleado } from 'src/app/models/TipoEmpleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-alta-empleado',
  templateUrl: './alta-empleado.component.html',
  styleUrls: ['./alta-empleado.component.css']
})
export class AltaEmpleadoComponent implements OnInit {

  form: FormGroup;
  empleado: AltaEmpleado
  tiposEmpleado: TipoEmpleado[] = []

  constructor(private builder: FormBuilder, private empleadoService: EmpleadoService) { }

  ngOnInit(): void {

    this.form = this.builder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      legajo: [0, [Validators.required, Validators.minLength(5)]],
      check: [false],
      idTipoEmpleado: [0, Validators.required],
      dni: [0, [Validators.required, Validators.minLength(8)]],
      telefono: [0, [Validators.required, Validators.minLength(8)]],
      mail: ['', Validators.required],
      usuario: [' '],
      contrasena: [' '],
    })

    this.getTiposEmpleado()
  }

  postEmpleado(){
    if(this.form.invalid){
      alert("Complete todos los campos requeridos")
      return
    }
    this.empleado = new AltaEmpleado();
    this.empleado.idTipoEmpleado = this.form.controls['idTipoEmpleado'].value
    this.empleado.nombre = this.form.controls['nombre'].value
    this.empleado.apellido = this.form.controls['apellido'].value
    this.empleado.legajo = this.form.controls['legajo'].value.toString()
    this.empleado.dni = this.form.controls['dni'].value.toString()
    this.empleado.telefono = this.form.controls['telefono'].value.toString()
    this.empleado.mail = this.form.controls['mail'].value
    this.empleado.usuario = this.form.controls['usuario'].value
    this.empleado.contrasena = this.form.controls['contrasena'].value

    this.empleadoService.postEmpleado(this.empleado).subscribe({
      next: (r: boolean) => {if(r){alert("Empleado con legajo: " + this.empleado.legajo + " registrado correctamente")}},
      error: (e) => console.log(e)
    })
  }

  getTiposEmpleado(){
    this.empleadoService.getTipoEmpleado().subscribe({
      next: (r: TipoEmpleado[]) => this.tiposEmpleado = r,
      error: (e)=> console.log(e)
    })
  }

}
