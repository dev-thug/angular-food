import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./component/home.component";
import {FoodDetailComponent} from "./component/food/food-detail/food-detail.component";
import {FoodsComponent} from "./component/food/foods/foods.component";
import {SigninComponent} from "./component/user/signin/signin.component";
import {SignupComponent} from "./component/user/signup/signup.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'foods', component: FoodsComponent},
  {path: 'food/:foodId', component: FoodDetailComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
