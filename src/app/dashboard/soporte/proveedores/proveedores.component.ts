import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AltaProveedor } from 'src/app/models/altas/AltaProveedor';
import { Proveedor } from 'src/app/models/Proveedor';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  form: FormGroup
  proveedor = new AltaProveedor()
  lista: Proveedor[]

  constructor(private services: ProveedoresService, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.lista = []
    this.getLista()
    this.form = this.builder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      telefono: ['', Validators.required],
      mail: ['', Validators.required],
    })
  }

  postProveedor(){
    this.proveedor = this.form.value
    this.services.postProveedor(this.proveedor).subscribe({
      next: (r: boolean) => {alert("Exito"), this.ngOnInit()}
    })
  }

  getLista(){
    this.services.getProveedores().subscribe({
      next: (r: Proveedor[]) => this.lista = r
    })
  }

  deleteProveedor(id: number){
    this.services.deleteProveedor(id).subscribe({
      next: (r: boolean)=> {alert("Eliminado"), this.ngOnInit()}
    })
  }

}
