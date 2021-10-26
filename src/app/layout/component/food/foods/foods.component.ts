import {Component, OnInit} from '@angular/core';
import {Food} from "../../../../model/food";
import {FoodService} from "../../../../service/food.service";
import {MatTableDataSource} from "@angular/material/table";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
  foods: Food[] = [];
  displayedColumns: string[] = ['id', 'name', 'part', 'cost'];

  search?: string;
  pageIndex: number = 0;
  length: number = 0;
  pageSize = 10;

  pageEvent: PageEvent;

  constructor(
    private foodService: FoodService
  ) {
    this.pageEvent = new PageEvent();
  }

  ngOnInit(): void {
    this.getFoods();
  }

  getFoods(): void {
    if (!this.search) {
      this.foodService.getFoods(this.pageEvent.pageIndex, this.pageEvent.pageSize)
        .subscribe(foods => {
          this.foods = foods._embedded.foods as Food[];
          this.length = foods.page.totalElements;
          this.pageSize = foods.page.size;
        });
    } else {
      this.foodService.getSearchFoods(this.pageEvent.pageIndex, this.pageEvent.pageSize, this.search)
        .subscribe(foods => {
          this.foods = foods._embedded.foods as Food[];
          this.length = foods.page.totalElements;
          this.pageSize = foods.page.size;
        });
    }


  }

}
