import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

//Page navegation
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { PrivadoPageComponent } from './componentes/privado-page/privado-page.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';

import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';

//firebase
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import {environment} from '../environments/environment';

import {AuthGuard} from './guards/auth.guard';

//Services
import { AuthService } from './servicios/auth.service';
import { ProductService } from './servicios/products/product.service'
import { FacturaService } from './servicios/facturas/factura.service'

//Componente
import { ProductsComponent } from './componentes/products/products.component';
import { ProductListComponent } from './componentes/products/product-list/product-list.component';
import { ProductComponent } from './componentes/products/product/product.component';

import { FacturasComponent } from './componentes/facturas/facturas.component';
import { FacturaComponent } from './componentes/facturas/factura/factura.component';
import { FacturaListComponent } from './componentes/facturas/factura-list/factura-list.component';
import { ImpuestosListComponent } from './componentes/facturas/impuestos-list/impuestos-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivadoPageComponent,
    NotFoundPageComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    FacturasComponent,
    FacturaComponent,
    FacturaListComponent,
    ImpuestosListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService, ProductService,FacturaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
