import { FoodService } from 'src/app/services/food.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/shared/models/food';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food!: Food;
  constructor(activatedRoute: ActivatedRoute, foodService: FoodService,private cartService:CartService, private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        foodService.getFoodById(params.id).subscribe(serverFood => {
          this.food = serverFood;
        })
      }
    })
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
}
