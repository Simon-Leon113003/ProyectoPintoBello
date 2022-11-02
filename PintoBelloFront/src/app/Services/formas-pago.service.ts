import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormasPago } from '../Models/FormasPago';

@Injectable({
  providedIn: 'root'
})
export class FormasPagoService {
   urlApi = 'https://localhost:7222/api/FormaPago';
  constructor(private http :HttpClient) { }

  getFormasPago() : Observable<FormasPago[]>{
    return this.http.get<FormasPago[]>(this.urlApi);
  }
}
