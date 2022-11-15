import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AltaProveedor } from '../models/altas/AltaProveedor';
import { EditProveedor } from '../models/edits/EditProveedor';
import { Proveedor } from '../models/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url + "proveedores/";
  }

  getProveedores(): Observable<Proveedor[]>{
    var url = this.url + "listado"
    return this.http.get<Proveedor[]>(url)
  }

  postProveedor(p: AltaProveedor): Observable<boolean>{
    var url = this.url + "alta"
    return this.http.post<boolean>(url, p)
  }

  putProveedor(id: number, p: EditProveedor): Observable<boolean>{
    var url = this.url + "update/" + id
    return this.http.put<boolean>(url, p)
  }

  deleteProveedor(id: number): Observable<boolean>{
    var url = this.url + "baja/" + id
    return this.http.put<boolean>(url, null)
  }

}
