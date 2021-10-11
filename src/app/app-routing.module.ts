import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./component/home.component";
import {FoodDetailComponent} from "./component/food/food-detail/food-detail.component";
import {FoodsComponent} from "./component/food/foods/foods.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'foods', component: FoodsComponent},
  {path: 'food/:foodId', component: FoodDetailComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
