import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../../ingredients.service';
import { Ingredient } from '../../interface';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
  providers: [IngredientsService]
})
export class IngredientsComponent {

  ingredients: Ingredient[] = [];
  loading = true;

  init(): void{
    this.loadIngredients();
  }

  loadIngredients(): void {
    this.ingredientsService.getAllIngredient().subscribe(res => {
      this.ingredients = res;
      this.loading = false;
    });
    console.log(this.ingredients);
    
  }

  constructor(private ingredientsService: IngredientsService) {
    this.init()
  }


}
