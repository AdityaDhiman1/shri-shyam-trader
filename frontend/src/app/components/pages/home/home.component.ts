import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods: Food[] = [];
  constructor(private foodServices: FoodService,activatedRoute:ActivatedRoute) {
    let foodsObservable: Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        foodsObservable = this.foodServices.getAllFoodsBySearchTerm(params.searchTerm);
      }
      else if (params.tag) {
        foodsObservable = this.foodServices.getAllFoodsByTag(params.tag)
      }
      else {
        foodsObservable = this.foodServices.getAll()
      }

      foodsObservable.subscribe((serverFoods) => {
        this.foods = serverFoods
      })
    })
  }

}
