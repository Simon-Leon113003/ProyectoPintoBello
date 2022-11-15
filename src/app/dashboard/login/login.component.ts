import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { EstadoNavService } from 'src/app/services/estado-nav.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  user: Usuario;
  sesion = false;
  tipoUser = 0

  constructor(private router: Router, 
              private builder: FormBuilder, 
              private storage: StorageService,
              private navEstado: EstadoNavService,
              private login: EmpleadoService
    ) { }

  ngOnInit(): void {
    this.user = new Usuario();

    this.form = this.builder.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    })
  }

  goHome(){
    if(this.form.invalid){
      alert("Complete todos los campos")
      return
    }
    this.user = this.form.value;
    this.login.login(this.user).subscribe({
      next: (r: number) => {this.tipoUser = r, alert("Ingreso: " + r), this.handleSucces()},
      error: (e) => alert(e.error)
    })
    
  }

  handleSucces(){
    this.navEstado.setEstado(true);
    this.storage.setUserLogged();
    this.storage.guardarUsuario(this.user.usuario, this.user.contrasena);
    this.router.navigateByUrl('/home');
  }

}
