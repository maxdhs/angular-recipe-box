import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  @Output() newRecipeEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submitForm(name: string, instructions: string) {
    let newRecipe: Recipe= new Recipe (name, instructions);
    this.newRecipeEmitter.emit(newRecipe);
  }
}
