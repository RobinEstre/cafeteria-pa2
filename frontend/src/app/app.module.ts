import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login/login.component';
import { OrdersDemoComponent } from './components/orders/orders-demo/orders-demo.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { MaterialModule } from './material.module';
import { ProductosListComponent } from './components/productos/producto-list/productos-list.component';
import { ProductoDialogComponent } from './components/productos/producto-dialog/producto-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductosListComponent,
    OrdersDemoComponent,
    ProductoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
