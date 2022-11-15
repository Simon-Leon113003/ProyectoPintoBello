import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoNavService {

  navEstado = new Subject<boolean>();

  constructor() { }

  setEstado(v: boolean){
    this.navEstado.next(v);
  }

  getEstado(): Observable<boolean>{
    return this.navEstado.asObservable();
  }
}
