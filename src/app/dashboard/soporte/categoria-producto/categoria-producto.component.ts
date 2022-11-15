import { Component, OnInit } from '@angular/core';
import { TipoProducto } from 'src/app/models/TipoProducto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-categoria-producto',
  templateUrl: './categoria-producto.component.html',
  styleUrls: ['./categoria-producto.component.css']
})
export class CategoriaProductoComponent implements OnInit {

  tipoProducto: TipoProducto = new TipoProducto();
  tipos: TipoProducto[];

  constructor(private service: ProductoService) { }

  ngOnInit(): void {
    this.getListado();
  }

  postTipoProducto(){
    this.service.postTipoProducto(this.tipoProducto).subscribe({
      next:(r:boolean) =>  {alert("Exito"), this.ngOnInit()}
    })
  }

  getListado(){
    this.service.getTipoProducto().subscribe({
      next:(r:TipoProducto[]) =>  this.tipos = r
    })
  }

  deleteTipo(id: number){
    this.service.deleteTipoProducto(id).subscribe({
      next:(r:boolean) =>  {alert("Eliminado"), this.ngOnInit()}
    })
  }

}
