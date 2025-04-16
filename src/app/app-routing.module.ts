import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './user/profile/profile.component';
import { HomeComponent } from './user/home/home.component';
import { CartComponent } from './user/cart/cart.component';
import { OdersComponent } from './user/oders/oders.component';
import { InventoryComponent } from './admin/inventory/inventory.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ProductListComponent } from './user/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders', component: OdersComponent },
  { path: 'admin/inventory', component: InventoryComponent },
  { path: 'admin/orders', component: OrdersComponent },
  { path: 'products', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
