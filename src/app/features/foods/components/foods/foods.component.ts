import { Component, OnInit } from '@angular/core';
import { Food } from '../../interface';
import { FoodsService } from '../../foods.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss'],
  providers: [FoodsService]
})
export class FoodsComponent {

  foods: Food[] = [];
  loading = true;

  init(): void{
    this.loadIngredients();
  }

  loadIngredients(): void {
    this.foodsService.getAllFood().subscribe(res => {
      this.foods = res;
      this.loading = false;
    });    
  }

  constructor(private foodsService: FoodsService) {
    this.init()
  }

}
