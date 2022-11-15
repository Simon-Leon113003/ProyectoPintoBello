import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AltaProducto } from '../models/altas/AltaProducto';
import { ProductoEdit } from '../models/edits/ProductoEdit';
import { Marca } from '../models/Marca';
import { Producto } from '../models/Producto';
import { TipoProducto } from '../models/TipoProducto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url: string;
  url2: string;

  constructor(private http: HttpClient) {
    this.url = environment.url + "productos/";
    this.url2 = environment.url + "tipoProducto/";
  }

  getProductos(): Observable<Producto[]>{
    var url = this.url + "getListado"
    return this.http.get<Producto[]>(url)
  }

  postProducto(p: AltaProducto): Observable<boolean>{
    var url = this.url + "alta"
    return this.http.post<boolean>(url, p)
  }

  getTiposProducto(): Observable<TipoProducto[]>{
    var url = environment.url + "tipoProducto/listado"
    return this.http.get<TipoProducto[]>(url)
  }

  deleteProducto(id: number): Observable<boolean>{
    var url = this.url + "baja/" + id
    return this.http.put<boolean>(url, null);
  }

  getMarcas(): Observable<Marca[]>{
    var url = environment.url + "marca/listado"
    return this.http.get<Marca[]>(url);
  }

  postTipoProducto(t: TipoProducto): Observable<boolean>{
    var url = this.url2 + "post"
    return this.http.post<boolean>(url, t);
  }

  getTipoProducto(): Observable<TipoProducto[]>{
    var url = this.url2 + "listado"
    return this.http.get<TipoProducto[]>(url);
  }

  deleteTipoProducto(id: number): Observable<boolean>{
    var url = this.url2 + "baja/" + id
    return this.http.put<boolean>(url, null);
  }

  putProducto(p: ProductoEdit[]): Observable<boolean>{
    var url = this.url + "put"
    return this.http.put<boolean>(url, p);
  }
  
}
