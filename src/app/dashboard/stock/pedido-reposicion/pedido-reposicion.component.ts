import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';import { ProductoEdit } from 'src/app/models/edits/ProductoEdit';
import { Producto } from 'src/app/models/Producto';
import { Proveedor } from 'src/app/models/Proveedor';
;
import { ProductoService } from 'src/app/services/producto.service';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-pedido-reposicion',
  templateUrl: './pedido-reposicion.component.html',
  styleUrls: ['./pedido-reposicion.component.css']
})
export class PedidoReposicionComponent implements OnInit {

  form: FormGroup;
  proveedores: Proveedor[];
  productos: Producto[];
  producto1: Producto = new Producto()
  productosEdit: ProductoEdit[] = []
  producto: ProductoEdit;

  constructor(private productoS: ProductoService, private builder: FormBuilder, private proveedorS: ProveedoresService) { }

  ngOnInit(): void {
    this.form = this.builder.group({
      proveedor: ['', Validators.required],
      precioCompra: [0, Validators.required],
      idProducto: [0, Validators.required],
      stock: [0, Validators.required]
    })

    this.getProductos()
    this.getProveedores()
  }

  getProveedores(){
    this.proveedorS.getProveedores().subscribe({
      next: (r: Proveedor[]) => this.proveedores = r,
      error:(e)=> console.log(e.error)
    })
  }

  getProductos(){
    this.productoS.getProductos().subscribe({
      next: (r: Producto[]) => this.productos = r,
      error:(e)=> console.log(e.error)
    })
  }

  putProducto(){
    if(this.form.invalid){
      alert("complete los campos")
      return
    }
    this.productoS.putProducto(this.productosEdit).subscribe({
      next: (r: boolean) => alert("Ok"),
      error:(e)=> console.log(e)
    })
  }

  pushProducto(){
    if(this.form.invalid){
      alert("complete los campos")
      return
    }
    this.producto = new ProductoEdit();
    this.producto.idProducto = this.form.controls['idProducto'].value
    this.producto.precioCompra = this.form.controls['precioCompra'].value
    this.producto.stock = this.form.controls['stock'].value

    this.producto1.idProducto = this.producto.idProducto

    this.productosEdit.push(this.producto);
  }

  quitarProducto(){

  }

}
