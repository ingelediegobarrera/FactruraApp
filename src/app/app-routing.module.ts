import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent} from './componentes/home-page/home-page.component';
import {LoginPageComponent} from './componentes/login-page/login-page.component';
import {RegisterPageComponent} from './componentes/register-page/register-page.component';
import {PrivadoPageComponent} from './componentes/privado-page/privado-page.component';
import {FacturaComponent } from './componentes/facturas/factura/factura.component'
import {ImpuestosListComponent} from './componentes/facturas/impuestos-list/impuestos-list.component'
import {NotFoundPageComponent} from './componentes/not-found-page/not-found-page.component';

import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'factura', component: PrivadoPageComponent, canActivate: [AuthGuard]},
  {path: 'factura/add', component: FacturaComponent, canActivate: [AuthGuard]},
  {path: 'factura/impuestos', component: ImpuestosListComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
