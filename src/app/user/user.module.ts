import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { OdersComponent } from './oders/oders.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    OdersComponent,
    ProductListComponent,
    ProfileComponent,
  ],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
