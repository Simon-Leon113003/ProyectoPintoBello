import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../Models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  urlApi = 'https://localhost:7222/Cliente';
  constructor(private http : HttpClient) { }

  agregar(cliente:Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>(this.urlApi,cliente);
  }
   getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.urlApi);
   }
  getClienteId(id : number):Observable<any>{
    return this.http.get<any>(this.urlApi+'/'+ id)
  }
 
  eliminar(id: string): Observable<any> {
    return this.http.delete(this.urlApi+'/'+id);
  }
 
}
