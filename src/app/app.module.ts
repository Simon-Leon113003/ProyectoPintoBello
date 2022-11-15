import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './dashboard/nav/nav.component';
import { HomeComponent } from './dashboard/home/home.component';
import { LoginComponent } from './dashboard/login/login.component';
import { AltaVentaComponent } from './dashboard/ventas/alta-venta/alta-venta.component';
import { AltaClienteComponent } from './dashboard/clientes/alta-cliente/alta-cliente.component';
import { AltaProductoComponent } from './dashboard/stock/alta-producto/alta-producto.component';
import { BuscadorFacturaComponent } from './dashboard/ventas/buscador-factura/buscador-factura.component';
import { ConsultarStockComponent } from './dashboard/stock/consultar-stock/consultar-stock.component';
import { AltaEmpleadoComponent } from './dashboard/empleados/alta-empleado/alta-empleado.component';
import { BuscadorClienteComponent } from './dashboard/clientes/buscador-cliente/buscador-cliente.component';
import { BuscadorEmpleadoComponent } from './dashboard/empleados/buscador-empleado/buscador-empleado.component';
import { AltaUsuarioComponent } from './dashboard/empleados/alta-usuario/alta-usuario.component';
import { ReportesComponent } from './dashboard/ventas/reportes/reportes.component';
import { BarriosComponent } from './dashboard/soporte/barrios/barrios.component';
import { ProveedoresComponent } from './dashboard/soporte/proveedores/proveedores.component';
import { CategoriaEmpleadoComponent } from './dashboard/soporte/categoria-empleado/categoria-empleado.component';
import { CategoriaProductoComponent } from './dashboard/soporte/categoria-producto/categoria-producto.component';
import { PedidoReposicionComponent } from './dashboard/stock/pedido-reposicion/pedido-reposicion.component';
import { NgChartsModule } from 'ng2-charts';
import { Reporte1Component } from './dashboard/reportes/reporte1/reporte1.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    AltaVentaComponent,
    AltaClienteComponent,
    AltaProductoComponent,
    BuscadorFacturaComponent,
    ConsultarStockComponent,
    AltaEmpleadoComponent,
    BuscadorClienteComponent,
    BuscadorEmpleadoComponent,
    AltaUsuarioComponent,
    ReportesComponent,
    BarriosComponent,
    ProveedoresComponent,
    CategoriaEmpleadoComponent,
    CategoriaProductoComponent,
    PedidoReposicionComponent,
    Reporte1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
