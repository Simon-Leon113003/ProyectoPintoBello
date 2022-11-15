import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleado } from 'src/app/models/Empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-buscador-empleado',
  templateUrl: './buscador-empleado.component.html',
  styleUrls: ['./buscador-empleado.component.css']
})
export class BuscadorEmpleadoComponent implements OnInit {

  empleados: Empleado[]
  empleados1: Empleado[]
  empleados2: Empleado[]
  form: FormGroup;

  constructor(private empleadoService: EmpleadoService, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.empleados = []
    this.empleados1 = []
    this.empleados2 = []
    this.getEmpleados();

    this.form = this.builder.group({
      empleado: ['']
    })
  }

  getEmpleados(){
    this.empleadoService.getEmpleados().subscribe({
      next:(r: Empleado[]) => {this.empleados1 = r},
      error: (e) => console.log(e)
    })
  }

  buscar(value: any){
    this.empleados2.splice(0, this.empleados2.length)

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
    this.cargarTabla(e)
  }

  cargarTabla(e: Empleado){
    this.empleados2.push(e)
  }

  verTodos(){
    this.empleados2.splice(0, this.empleados2.length)
    for (let index = 0; index < this.empleados1.length; index++) {
      const e = this.empleados1[index];
      this.empleados2.push(e)
    }
  }

  eliminar(e: Empleado){
    if(confirm("Seguro que desea eliminar a " + e.nombre + " " + e.apellido)){
      this.empleadoService.deleteEmpleado(e.idEmpleado).subscribe({
        next:(r: boolean) => { alert("Empleado eliminado"), this.ngOnInit(), this.verTodos()},
        error:(e) => console.log(e)
      })
    }
    
  }

}
