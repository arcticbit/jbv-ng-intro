import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Recipe } from './recipe.model';
import { RecipesStore } from './recipes.store';

@Injectable({ providedIn: 'root' })
export class RecipesService {

  constructor(private recipesStore: RecipesStore, private http: HttpClient) {
  }


  get() {
    return this.http
      .get<Recipe[]>('http://localhost:4200/assets/food.json')
      .pipe(tap(entities => {
        this.recipesStore.set(entities);
    }));
  }

  add(recipe: Recipe) {
    this.recipesStore.add(recipe);
  }

  update(id: ID, recipe: Partial<Recipe>) {
    this.recipesStore.update(id, recipe);
  }

  remove(id: ID) {
    this.recipesStore.remove(id);
  }

}
