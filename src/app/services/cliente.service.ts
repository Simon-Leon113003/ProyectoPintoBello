import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AltaCliente } from '../models/altas/AltaCliente';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url + "cliente/";
  }

  getClientes(): Observable<Cliente[]>{
    var url = this.url + "listado"
    return this.http.get<Cliente[]>(url);
  }

  getCliente(id: number): Observable<Cliente>{
    var url = this.url + "obtenerId/" + id
    return this.http.get<Cliente>(url);
  }

  postCliente(c: AltaCliente): Observable<boolean>{
    var url = this.url + "alta"
    return this.http.post<boolean>(url, c);
  }

  putCliente(id: number, c: AltaCliente): Observable<boolean>{
    var url = this.url + "update/" + id
    return this.http.put<boolean>(url, c);
  }

  deleteCliente(id: number){
    var url = this.url + "baja/" + id
    return this.http.put<boolean>(url, null);
  }


}
