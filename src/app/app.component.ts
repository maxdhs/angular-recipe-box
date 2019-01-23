import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe';
  recipes: Recipe[] = [
    new Recipe('cake', 'chocolate puddng'),
    new Recipe('soda', 'coke diet coke'),
    new Recipe('nachos', 'cheese and beef')
  ];

  // submitForm(name, description) {
  //   console.log(name, description);
  // }
}


