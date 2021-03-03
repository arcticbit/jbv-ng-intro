import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';


export interface RecipesJson {
  recipes: string[];
}
@Injectable()
export class RecipesService {

  private recipes: string[];

  constructor(
    private http: HttpClient,
  ) {
    this.recipes = [
      'Pasta och köttfärssås',
      'Blodpudding',
      'Kebabrulle',
    ];
  }

  list(): Observable<RecipesJson> {
    return this.http
      .get<RecipesJson>('http://localhost:62355/assets/food.json')
      .pipe(take(1));
  }
}
