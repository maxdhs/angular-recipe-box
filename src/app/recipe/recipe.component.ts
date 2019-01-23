import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './../models/recipe.model';
import { debugOutputAstAsTypeScript } from '@angular/compiler';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() recipe: Recipe;
  showInstructions: boolean = false;

  clickFunc() {
    this.showInstructions = !this.showInstructions;
  }

  ngOnInit() {
  }

}
