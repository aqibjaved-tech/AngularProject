import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChange = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [new Ingredient('Black Pepper', 5),
    new Ingredient('Salt', 10),
    new Ingredient('Olive Oil', 2)];
  constructor() { }
  getIngredient() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChange.emit(this.ingredients.slice())
  }
  addIngredientsList(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
    this.ingredientsChange.emit(this.ingredients.slice());
  }
}
