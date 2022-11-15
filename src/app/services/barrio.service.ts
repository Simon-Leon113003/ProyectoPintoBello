import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AltaBarrio } from '../models/altas/AltaBarrio';
import { Barrio } from '../models/Barrio';

@Injectable({
  providedIn: 'root'
})
export class BarrioService {

  url: string;
  constructor(private http: HttpClient) { 
    this.url = environment.url + "barrio/";
  }

  getBarrios(): Observable<Barrio[]>{
    var url = this.url + "listaBarrios"
    return this.http.get<Barrio[]>(url);
  }

  postBarrio(barrio: AltaBarrio): Observable<boolean>{
    var url = this.url + "agregar"
    return this.http.post<boolean>(url, barrio);
  }

  putBarrio(id: number, cmd: string): Observable<boolean>{
    var url = this.url +="editar/" + id
    return this.http.put<boolean>(url, cmd);
  }

  deleteBarrio(id: number){
    var url = this.url + "baja/" + id
    return this.http.put<boolean>(url, null);
  }
}
