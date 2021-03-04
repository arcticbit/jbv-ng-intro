import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Recipe } from '../../state/recipe.model';
import { RecipesQuery } from '../../state/recipes.query';
import { RecipesService } from '../../state/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  subscription?: Subscription;
  recipes: string[] = [];
  recipes$: Observable<Recipe[]>;

  constructor(
    private recipeService: RecipesService,
    private query: RecipesQuery,
  ) {
    this.recipes$ = this.query.selectAll();

  }

  ngOnInit(): void {
    this.subscription = this.recipeService.get().subscribe()
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
