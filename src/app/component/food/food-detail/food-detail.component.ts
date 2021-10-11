import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Food} from "../../../model/food";
import {FoodService} from "../../../service/food.service";
import {MatDialog} from "@angular/material/dialog";
import {FoodUpdateComponent} from "../food-update/food-update.component";

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {

  foodId: number;

  food?: Food

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
    public dialog: MatDialog
  ) {
    this.foodId = this.route.snapshot.params['foodId'];

  }

  ngOnInit(): void {
    this.getFood(this.foodId);
  }

  getFood(id: number) {
    this.foodService.getFood(id).subscribe(food => this.food = food)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FoodUpdateComponent,
      {
        width: '250px',
        data: this.food?.cost
      });
    dialogRef.afterClosed().subscribe(result => this.updateFood(this.foodId, result))

  }

  updateFood(id: number, cost: number) {
    this.foodService.updateFood(id, cost).subscribe(food => this.food = food)
  }


}
