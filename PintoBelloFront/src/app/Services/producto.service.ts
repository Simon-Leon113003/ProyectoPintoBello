import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../Models/pedido';
import { Producto } from '../Models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
urlApi = 'https://localhost:7222/Producto';
 
constructor(private http : HttpClient) { }


  getProducto(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.urlApi);
   }


}
