import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipesList: Recipe[] = [
  ];

  addRecipeToList(newRecipe: Recipe) {
    this.recipesList.push(newRecipe);
  }
}


