import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setUserLogged() {
    sessionStorage.setItem("logged", "true");

  }

  setUserLogout() {
    localStorage.removeItem("usuario");
    localStorage.removeItem("password");
    sessionStorage.removeItem("logged");
  }

  isLogged() :boolean {
    return sessionStorage.getItem("logged") === "true";
  }

  guardarUsuario(user: string, pass: string){
    localStorage.setItem("usuario", user);
    localStorage.setItem("password", pass);
  }

  setUsuario(user: string){
    localStorage.setItem("usuario", user);
  }

  leerUsuario(){
    return localStorage.getItem("usuario") ? localStorage.getItem("usuario") : "username"
  }

  leerPassword(){
    return localStorage.getItem("password") ? localStorage.getItem("password") : "password"
  }
}
