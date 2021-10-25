import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./modules/material/material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './component/home.component';
import {FoodsComponent} from './component/food/foods/foods.component';
import {FoodDetailComponent} from './component/food/food-detail/food-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FoodUpdateComponent} from './component/food/food-update/food-update.component';
import {SigninComponent} from './component/user/signin/signin.component';
import { ButtonsComponent } from './material-component/buttons/buttons.component';
import { ChipsComponent } from './material-component/chips/chips.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodsComponent,
    FoodDetailComponent,
    FoodUpdateComponent,
    SigninComponent,
    ButtonsComponent,
    ChipsComponent
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
