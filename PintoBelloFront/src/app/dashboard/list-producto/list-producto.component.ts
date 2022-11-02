import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Producto } from 'src/app/Models/producto';
import { ProductoService } from 'src/app/Services/producto.service';

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.css']
})
export class ListProductoComponent implements OnInit, OnDestroy {
  listProducto: Producto[];
  private subscription = new Subscription();
  constructor(private productoService: ProductoService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.listarProducto();
  }

  listarProducto() {
    this.subscription.add(this.productoService.getProducto().subscribe({
      next: (listado: Producto[]) => {
        //exito
        this.listProducto = listado;
         console.log(this.listProducto);
      },
      error: () => {
        //error
        alert('Error 404')
      }
    }));
  }
}


