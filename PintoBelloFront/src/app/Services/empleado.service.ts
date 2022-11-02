import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../Models/Empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  urlApi = 'https://localhost:7222/Empleado';
  constructor(private http : HttpClient) { }

  getEmpleados (): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.urlApi);
  }
}
