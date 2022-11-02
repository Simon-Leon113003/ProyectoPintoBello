import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Models/usuario';
import { LoginServiceService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario : Usuario;
  constructor(private router: Router,private LoginService : LoginServiceService ) { }

  ngOnInit(): void {
  }

  irHome(){
    this.router.navigate(['home']);
  }
  guardarOrden(){
  
    this.LoginService.postLogin(this.usuario).subscribe({
      next : () =>{
      alert ("Ingreso exitoso");
   
      },
      error : () =>{
        alert('error');
      }
    });
  }
}
