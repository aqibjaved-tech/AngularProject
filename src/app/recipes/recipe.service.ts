import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Pepper', 3)
      ]),
    new Recipe('Another Test Recipe',
      'This is simply steak recipe with medium rare cooked.',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('Stake', 3),
        new Ingredient('Salt', 5),
        new Ingredient('Yougart', 3)
      ])
  ];
  constructor(private slService: ShoppingListService) { }
  getRecipe() {
    return this.recipes.slice();
  }
  addIngredientToSLList(ingredients: Ingredient[]) {
    this.slService.addIngredientsList(ingredients);
  }
  getRecipeMethod(id: number) {
    return this.recipes[id];
  }
}
