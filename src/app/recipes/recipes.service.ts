import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

export interface Ingredient {
  quantity: string;
  name: string;
  type: string;
}
export interface Recipe {
  id: number;
  name: string;
  ingredients: Ingredient[];
}

@Injectable()
export class RecipesService {

  constructor(
    private http: HttpClient,
  ) {}

  list(): Observable<Recipe[]> {
    return this.http
      .get<Recipe[]>('http://localhost:62355/assets/food.json')
      .pipe(take(1));
  }

  get(id: number): Observable<Recipe | undefined> {
    return this.http
      .get<Recipe[]>('http://localhost:62355/assets/food.json')
      .pipe(
        take(1),
        map(result => result.find(recipe => {
            return recipe.id === id;
          }
        ))
      );
  }
}
