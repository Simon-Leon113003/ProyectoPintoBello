import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../Models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  urlApi = '';
  constructor(private http : HttpClient) { }


  postLogin(usuario:Usuario) : Observable<Usuario>{
    return this.http.post<Usuario>(this.urlApi,usuario);
  }
}
