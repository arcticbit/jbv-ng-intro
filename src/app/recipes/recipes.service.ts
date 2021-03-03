import { Injectable } from '@angular/core';

@Injectable()
export class RecipesService {

  private recipes: string[];

  constructor() {
    this.recipes = [
      'Pasta och köttfärssås',
      'Blodpudding',
      'Kebabrulle',
    ];
  }

  list() {
    return this.recipes;
  }
}
