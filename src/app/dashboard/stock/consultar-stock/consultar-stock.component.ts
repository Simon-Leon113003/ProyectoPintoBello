import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Producto } from 'src/app/models/Producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-consultar-stock',
  templateUrl: './consultar-stock.component.html',
  styleUrls: ['./consultar-stock.component.css']
})
export class ConsultarStockComponent implements OnInit {

  Productos: Producto[]
  Productos1: Producto[]
  Productos2: Producto[]
  tamanos: string[] = []
  form: FormGroup;
  stock: number

  constructor(private productoService: ProductoService, private builder: FormBuilder) { }
  
  ngOnInit(): void {
    this.Productos = []
    this.Productos1 = []
    this.Productos2 = []
    this.tamanos[0] = "Grande"
    this.tamanos[1] = "Chico"
    this.tamanos[2] = "Mediano"
    this.getProductos();

    this.form = this.builder.group({
      Producto: ['']
    })
  }

  getProductos(){
    this.productoService.getProductos().subscribe({
      next:(r: Producto[]) => {this.Productos1 = r},
      error: (e) => console.log(e)
    })
  }

  getTamano(id: number): string{
    return this.tamanos[id];

  }

  buscar(value: any){
    this.Productos2.splice(0, this.Productos2.length)

    if(value == "" || value == " "){
      this.Productos.splice(0, this.Productos.length)
      return
    }

    for (let index = 0; index < this.Productos1.length; index++) {
      const e = this.Productos1[index];

      if(e.nombre.toLowerCase().includes(value.toLowerCase())){
        this.Productos.push(e)
      }
      else{
        this.Productos.splice(index, 1)
      }
    }
    
  }

  borrarArray(){
    this.Productos.splice(0, this.Productos.length)
  }

  cargarProducto(p: Producto){
    this.form.controls['Producto'].setValue(p.nombre);
    this.Productos.splice(0, this.Productos.length)
    this.cargarTabla(p)
  }

  cargarTabla(p: Producto){
    this.Productos2.push(p)
  }

  verTodos(){
    this.Productos2.splice(0, this.Productos2.length)
    for (let index = 0; index < this.Productos1.length; index++) {
      const e = this.Productos1[index];
      this.Productos2.push(e)
    }
  }

  eliminar(p: Producto){
    if(confirm("Seguro que desea eliminar a " + p.nombre)){
      this.productoService.deleteProducto(p.idProducto).subscribe({
        next:(r: boolean) => { alert("Producto eliminado"), this.ngOnInit(), this.verTodos()},
        error:(e) => console.log(e)
      })
    }
    
  }



}
