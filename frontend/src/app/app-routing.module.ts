import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { OrdersDemoComponent } from './components/orders/orders-demo/orders-demo.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductosListComponent } from './components/productos/producto-list/productos-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'productos', component: ProductosListComponent, canActivate: [AuthGuard] },
  { path: 'orders-demo', component: OrdersDemoComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'productos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
