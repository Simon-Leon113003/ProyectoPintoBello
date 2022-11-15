import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AltaBarrio } from 'src/app/models/altas/AltaBarrio';
import { Barrio } from 'src/app/models/Barrio';
import { BarrioService } from 'src/app/services/barrio.service';

@Component({
  selector: 'app-barrios',
  templateUrl: './barrios.component.html',
  styleUrls: ['./barrios.component.css']
})
export class BarriosComponent implements OnInit {

  form: FormGroup
  barrio: AltaBarrio = new AltaBarrio()
  barrios: Barrio[]

  constructor(private service: BarrioService, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.getBarrios()
    this.form = this.builder.group({
      descripcion: ['', Validators.required]
    })
  }

  postBarrio(){
    if(this.barrio.descripcion == "" || this.barrio.descripcion == " "){
      alert("Agrege un barrio")
      return
    }
    this.barrio = this.form.value
    this.service.postBarrio(this.barrio).subscribe({
      next:(r: boolean)=> {alert("Exito"), this.ngOnInit()},
      error:(e)=> console.log(e)
    })
  }

  getBarrios(){
    this.barrios = []
    this.service.getBarrios().subscribe({
      next:(r:Barrio[])=> {this.barrios = r},
      error: (e) => alert(e.error)
    })
  }

  deleteBarrio(b: Barrio){
    this.service.deleteBarrio(b.id).subscribe({
      next:(r: boolean)=> this.getBarrios(),
      error:(e)=> console.log(e)
    })
  }

}
