import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './dashboard/login/login.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AltaClienteComponent } from './dashboard/alta-cliente/alta-cliente.component';
import { ModificarClienteComponent } from './dashboard/modificar-cliente/modificar-cliente.component';
import { NabvarComponent } from './dashboard/nabvar/nabvar.component';
import { FormsModule } from '@angular/forms';
import { ListClienteComponent } from './dashboard/list-cliente/list-cliente.component';
import { AltaPedidoComponent } from './dashboard/alta-pedido/alta-pedido.component';
import { ListPedidoComponent } from './dashboard/list-pedido/list-pedido.component';
import { ListProductoComponent } from './dashboard/list-producto/list-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    HomeComponent,
    AltaClienteComponent,
    ModificarClienteComponent,
    NabvarComponent,
    ListClienteComponent,
    AltaPedidoComponent,
    ListPedidoComponent,
    ListProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
