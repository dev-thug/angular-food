import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Food} from "../model/food";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private foodUrl = "/api/food";

  constructor(
    private http: HttpClient
  ) {
  }

  getFood(id: number): Observable<Food> {
    return this.http.get<any>(this.foodUrl + "/" + id);
  }

  getSearchFoods(pageIndex: number, pageSize: number, search: string): Observable<any> {
    return this.http.get<any>(this.foodUrl + "?page=" + pageIndex + "&size=" + pageSize + "&search=" + search);
  }

  getFoods(pageIndex: number, pageSize: number): Observable<any> {
    return this.http.get<any>(this.foodUrl + "?page=" + pageIndex + "&size=" + pageSize);
  }

  updateFood(id: number, cost: number): Observable<Food> {
    const params = new FormData();
    params.append("cost", cost.toString());
    return this.http.put<Food>(this.foodUrl + "/" + id, params);
  }

}
