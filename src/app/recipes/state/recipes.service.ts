import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cacheable, ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Recipe } from './recipe.model';
import { RecipesQuery } from './recipes.query';
import { RecipesStore } from './recipes.store';

@Injectable({ providedIn: 'root' })
export class RecipesService {

  constructor(
    private recipesStore: RecipesStore,
    private http: HttpClient,
    private query: RecipesQuery,
    ) {
  }


  get() {
    const data = this.http
      .get<Recipe[]>('http://localhost:4200/assets/food.json')
      .pipe(tap(entities => {
        this.recipesStore.set(entities);
    }));

    return cacheable(this.recipesStore, data);
  }

  add(recipe: Recipe) {

    // Only local persistance :)

    const ids = this.recipesStore.getValue().ids;
    recipe.id = Math.max(...ids as number[]) + 1;

    this.recipesStore.add(recipe);
  }

  update(id: ID, recipe: Partial<Recipe>) {
    this.recipesStore.update(id, recipe);
  }

  remove(id: ID) {
    this.recipesStore.remove(id);
  }

}
