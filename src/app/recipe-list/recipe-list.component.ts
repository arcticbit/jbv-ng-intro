import { Component, OnInit } from '@angular/core';
import { RecipesJson, RecipesService } from '../recipes/recipes.service';
import { take } from 'rxjs/operators'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: string[] = [];
  recipes$: Observable<RecipesJson>;

  constructor(private recipeService: RecipesService) {
    this.recipes$ = this.recipeService.list();
  }

  ngOnInit(): void {
    // this.recipeService
    //   .list()
    //   .pipe(take(1))
    //   .subscribe(result => {
    //     this.recipes = result.recipes;
    //   });
  }
}
