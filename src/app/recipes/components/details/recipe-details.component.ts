import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Ingredient, Recipe } from '../../state/recipe.model';
import { RecipesQuery } from '../../state/recipes.query';
import { RecipesService } from '../../state/recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  id: number;
  recipe$?: Observable<Recipe | undefined>;
  subscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private svc: RecipesService,
    private query: RecipesQuery,
  ) {
    this.id = parseInt(this.route.snapshot.params['id'], 10);
  }

  ngOnInit(): void {
    this.recipe$ = this.query.selectEntity(this.id)

    this.subscription = this.svc.get().subscribe()
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  getIngredientText(ingredient: Ingredient): string {
    // before: return ingredient.quantity + ' ' + ingredient.name;
    return `${ingredient.quantity} ${ingredient.name}`
  }

}
