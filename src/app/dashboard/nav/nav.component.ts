import { Component, OnInit } from '@angular/core';
import { EstadoNavService } from 'src/app/services/estado-nav.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  mostrar = false;

  constructor(private storage: StorageService,
              private navEstado: EstadoNavService 
    ) { }

  ngOnInit(): void {
    this.navEstado.getEstado().subscribe({
      next: (v: boolean) => this.mostrar = v
    })
  }

  logout(){
    this.navEstado.setEstado(false);
    this.mostrar = false
    this.storage.setUserLogout();
  }

}
