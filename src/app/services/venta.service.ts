import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Detalles, Factura, GetFacturas } from '../models/altas/AltaFactura';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  url: string;
  facturas: Factura[]  = []
  detalles: Detalles[] = []
  f: Factura
  d: Detalles
  pipe = new DatePipe('en-US');

  constructor(private http: HttpClient) {
    this.url = environment.url + "facturas/";

  }

  postFactura(f: Factura): Observable<boolean>{
    var url = this.url
    return this.http.post<boolean>(url, f);
  }

  getFacturas(): Observable<GetFacturas[]>{
    var url = this.url + 'getListado'
    return this.http.get<GetFacturas[]>(url);
  }



}
