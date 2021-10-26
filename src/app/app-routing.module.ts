import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./layout/component/home.component";
import {FoodDetailComponent} from "./layout/component/food/food-detail/food-detail.component";
import {FoodsComponent} from "./layout/component/food/foods/foods.component";
import {SigninComponent} from "./layout/component/user/signin/signin.component";
import {FullComponent} from "./layout/full/full.component";
import {LoginComponent} from "./pages/authentication/login/login.component";
import {RegisterComponent} from "./pages/authentication/register/register.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'foods', component: FoodsComponent},
  {path: 'food/:foodId', component: FoodDetailComponent},
  {path: 'signin', component: SigninComponent},

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
