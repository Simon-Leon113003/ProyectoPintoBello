import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AltaEmpleado } from '../models/altas/AltaEmpleado';
import { Empleado } from '../models/Empleado';
import { TipoEmpleado } from '../models/TipoEmpleado';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  url: string;
  url2: string;

  constructor(private http: HttpClient) {
    this.url = environment.url + "empleado/";
    this.url2 = environment.url + "tipoEmpleado/";
  }

  login(u: Usuario): Observable<number>{
    var url = this.url + "login"
    return this.http.post<number>(url, u);
  }

  getEmpleados(): Observable<Empleado[]>{
    var url = this.url + "listado"
    return this.http.get<Empleado[]>(url);
  }

  getEmpleado(id: number): Observable<Empleado>{
    var url = this.url + "obtenerId/" + id
    return this.http.get<Empleado>(url);
  }

  postEmpleado(e: AltaEmpleado): Observable<boolean>{
    var url = this.url + "alta"
    return this.http.post<boolean>(url, e);
  }

  putEmpleado(e: Empleado): Observable<boolean>{
    var url = this.url + "update/" + e.idEmpleado
    var request = {
      nombre: e.nombre,
      apellido: e.apellido,
      telefono: e.telefono,
      mail: e.mail
    }
    return this.http.put<boolean>(url, request);
  }

  putUsuario(id: number, u: Usuario): Observable<boolean>{
    var url = this.url + "updateUsuario/" + id
    return this.http.put<boolean>(url, u);
  }

  deleteEmpleado(id: number): Observable<boolean>{
    var url = this.url + "baja/" + id
    return this.http.put<boolean>(url, null);
  }

  getTipoEmpleado(): Observable<TipoEmpleado[]>{
    var url = this.url2 + "listado"
    return this.http.get<TipoEmpleado[]>(url);
  }

  postTipoEmpleado(t: TipoEmpleado): Observable<boolean>{
    var url = this.url2 + "alta"
    return this.http.post<boolean>(url, t);
  }

  deleteTipoEmpleado(id: number): Observable<boolean>{
    var url = this.url2 + "baja/" + id
    return this.http.put<boolean>(url, null);
  }
}
