import { Component, OnInit } from '@angular/core';
import { TipoEmpleado } from 'src/app/models/TipoEmpleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-categoria-empleado',
  templateUrl: './categoria-empleado.component.html',
  styleUrls: ['./categoria-empleado.component.css']
})
export class CategoriaEmpleadoComponent implements OnInit {

  tipoEmpleado: TipoEmpleado = new TipoEmpleado();
  tipos: TipoEmpleado[];

  constructor(private service: EmpleadoService) { }

  ngOnInit(): void {
    this.getListado();
  }

  postTipoEmpleado(){
    this.service.postTipoEmpleado(this.tipoEmpleado).subscribe({
      next:(r:boolean) =>  {alert("Exito"), this.ngOnInit()}
    })
  }

  getListado(){
    this.service.getTipoEmpleado().subscribe({
      next:(r:TipoEmpleado[]) =>  this.tipos = r
    })
  }

  deleteTipo(id: number){
    this.service.deleteTipoEmpleado(id).subscribe({
      next:(r:boolean) =>  {alert("Eliminado"), this.ngOnInit()}
    })
  }

}
