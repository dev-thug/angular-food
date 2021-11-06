import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./modules/material/material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './layout/component/home.component';
import {FoodsComponent} from './layout/component/food/foods/foods.component';
import {FoodDetailComponent} from './layout/component/food/food-detail/food-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FoodUpdateComponent} from './layout/component/food/food-update/food-update.component';
import { HeaderComponent } from './layout/full/header/header.component';
import { FullComponent } from './layout/full/full.component';
import { NavbarComponent } from './layout/full/navbar/navbar.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { MenuComponent } from './layout/full/navbar/menu/menu.component';
import { ApplicationDetailComponent } from './layout/component/application/application-detail/application-detail.component';
import { ApplicationComponent } from './layout/component/application/application.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodsComponent,
    FoodDetailComponent,
    FoodUpdateComponent,
    HeaderComponent,
    FullComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    ApplicationDetailComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
