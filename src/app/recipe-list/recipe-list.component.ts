import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: string[] = [];

  constructor(private recipeService: RecipesService) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.list();
  }

}
