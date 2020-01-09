import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is the description', 'https://www.vegkitchen.com/wp-content/uploads/2017/06/Basic-Bean-Salad.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
