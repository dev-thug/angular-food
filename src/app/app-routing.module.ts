import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FoodDetailComponent} from "./layout/component/food/food-detail/food-detail.component";
import {FoodsComponent} from "./layout/component/food/foods/foods.component";
import {FullComponent} from "./layout/full/full.component";
import {LoginComponent} from "./pages/authentication/login/login.component";
import {RegisterComponent} from "./pages/authentication/register/register.component";


const routes: Routes = [
  // {path: '', component: HomeComponent},
  {path: '', component: FoodsComponent},
  {path: 'food/:foodId', component: FoodDetailComponent},


  // layout
  {path: 'full', component: FullComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
