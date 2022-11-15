import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaVentaComponent } from './dashboard/ventas/alta-venta/alta-venta.component';
import { HomeComponent } from './dashboard/home/home.component';
import { LoginComponent } from './dashboard/login/login.component';
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
import { CategoriaEmpleadoComponent } from './dashboard/soporte/categoria-empleado/categoria-empleado.component';
import { CategoriaProductoComponent } from './dashboard/soporte/categoria-producto/categoria-producto.component';
import { ProveedoresComponent } from './dashboard/soporte/proveedores/proveedores.component';
import { PedidoReposicionComponent } from './dashboard/stock/pedido-reposicion/pedido-reposicion.component';
import { Reporte1Component } from './dashboard/reportes/reporte1/reporte1.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'alta-venta', component: AltaVentaComponent},
  {path: 'alta-cliente', component: AltaClienteComponent},
  {path: 'alta-producto', component: AltaProductoComponent},
  {path: 'buscar-factura', component: BuscadorFacturaComponent},
  {path: 'consultar-stock', component: ConsultarStockComponent},
  {path: 'alta-empleado', component: AltaEmpleadoComponent},
  {path: 'buscar-cliente', component: BuscadorClienteComponent},
  {path: 'buscar-empleado', component: BuscadorEmpleadoComponent},
  {path: 'alta-usuario', component: AltaUsuarioComponent},
  {path: 'reportes', component: ReportesComponent},
  {path: 'barrios', component: BarriosComponent},
  {path: 'categoria-empleado', component: CategoriaEmpleadoComponent},
  {path: 'categoria-producto', component: CategoriaProductoComponent},
  {path: 'proveedores', component: ProveedoresComponent},
  {path: 'pedido-reposicion', component: PedidoReposicionComponent},
  {path: 'reportes1', component: Reporte1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
