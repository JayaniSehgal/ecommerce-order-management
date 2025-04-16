import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './user/home/home.component';
import { CartComponent } from './user/cart/cart.component';
import { OdersComponent } from './user/oders/oders.component';
import { ProfileComponent } from './user/profile/profile.component';
import { InventoryComponent } from './admin/inventory/inventory.component';
import { OrdersComponent } from './admin/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    CartComponent,
    OdersComponent,
    OrdersComponent,
    InventoryComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
