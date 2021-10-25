import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./component/home.component";
import {FoodDetailComponent} from "./component/food/food-detail/food-detail.component";
import {FoodsComponent} from "./component/food/foods/foods.component";
import {SigninComponent} from "./component/user/signin/signin.component";
import {ButtonsComponent} from "./material-component/buttons/buttons.component";
import {ChipsComponent} from "./material-component/chips/chips.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'foods', component: FoodsComponent},
  {path: 'food/:foodId', component: FoodDetailComponent},
  {path: 'signin', component: SigninComponent},

//  For Test
  {path: 'buttons', component: ButtonsComponent},
  {path: 'chips', component: ChipsComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
