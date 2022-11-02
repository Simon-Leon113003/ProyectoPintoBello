import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../Models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  urlApi = 'https://localhost:7222/api/Venta';
  constructor(private http : HttpClient) { }

  agregarPedido(pedido:Pedido) : Observable<Pedido>{
    return this.http.post<Pedido>(this.urlApi,pedido);
  }
}
