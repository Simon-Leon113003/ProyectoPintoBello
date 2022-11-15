import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AltaProducto } from 'src/app/models/altas/AltaProducto';
import { Marca } from 'src/app/models/Marca';
import { Proveedor } from 'src/app/models/Proveedor';
import { TipoProducto } from 'src/app/models/TipoProducto';
import { ProductoService } from 'src/app/services/producto.service';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {

  form: FormGroup
  producto: AltaProducto
  marcas: Marca[] = []
  tiposProducto: TipoProducto[] = []
  proveedores: Proveedor[] = []


  constructor(private productoService: ProductoService, private proveedorService: ProveedoresService, private builder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    
    this.getListados();

    this.form = this.builder.group({
      nombre: ['', Validators.required],
      tamano: ['', Validators.required],
      idMarca: [0, Validators.required],
      idTipoProducto: [0, Validators.required],
      idProveedor: [0, Validators.required],
      precio: [0, Validators.required]
    })
  }
  
  postProducto(){
    this.producto = new AltaProducto()
    this.producto = this.form.value as AltaProducto
    this.productoService.postProducto(this.producto).subscribe({
      next: (r: boolean)=> {alert("Exito")},
      error: (e) => console.log(e.error)
    })
  }

  getListados(){
    this.productoService.getMarcas().subscribe({
      next: (r: Marca[])=> this.marcas = r
    })

    this.productoService.getTiposProducto().subscribe({
      next: (r: TipoProducto[])=> this.tiposProducto = r
    })

    this.proveedorService.getProveedores().subscribe({
      next: (r: Proveedor[])=> this.proveedores = r
    })
  }

  goProveedores(){
    this.router.navigateByUrl('/proveedores')
  }

}
