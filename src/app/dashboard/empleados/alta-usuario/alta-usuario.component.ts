import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Empleado } from 'src/app/models/Empleado';
import { Usuario } from 'src/app/models/Usuario';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {

  empleados: Empleado[]
  empleados1: Empleado[]
  form: FormGroup;
  idEmpleado = 0
  user: Usuario = new Usuario();

  constructor(private empleadoService: EmpleadoService, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.empleados = []
    this.empleados1 = []

    this.form = this.builder.group({
      empleado: ['', Validators.required],
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required],
      confirmar: ['', Validators.required]
    })

    this.getEmpleados();
  }

  getEmpleados(){
    this.empleadoService.getEmpleados().subscribe({
      next:(r: Empleado[]) => {this.empleados1 = r},
      error: (e) => console.log(e)
    })
  }

  guardarUser(){
    if(this.form.invalid){
      alert("Complete todos los campos")
      return
    }

    this.user.usuario = this.form.controls['usuario'].value
    this.user.contrasena = this.form.controls['contrasena'].value

    this.empleadoService.putUsuario(this.idEmpleado, this.user).subscribe({
      next:(r: boolean) => {if(r){alert("Usuario creado")}},
      error: (e) => console.log(e)
    })
  }

  buscar(value: any){

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

  borrarArray(){
    this.empleados.splice(0, this.empleados.length)
  }

  cargarEmpleado(e: Empleado){
    this.form.controls['empleado'].setValue(e.nombre + " " + e.apellido);
    this.empleados.splice(0, this.empleados.length)
    this.idEmpleado = e.idEmpleado
  }

}
