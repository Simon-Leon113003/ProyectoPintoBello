import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Barrios } from '../Models/barrios';

@Injectable({
  providedIn: 'root'
})
export class BarrioService {
  urlApi = 'https://localhost:7222/api/Barrio'

  constructor(private http: HttpClient) { }
  getBarrio():Observable<Barrios[]>{
    return this.http.get<Barrios[]>(this.urlApi);
  }
}
