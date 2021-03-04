import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient, Recipe } from '../../state/recipe.model';
import { RecipesService } from '../../state/recipes.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  newRecipe: Recipe;

  constructor(
    private service: RecipesService,
    private router: Router,
  ) {
    this.newRecipe = {
      ingredients: [ {
      } as Ingredient
    ],
      steps: [ 'Första steget' ]
    } as Recipe;
  }

  deleteIngredient(ingredient: Ingredient) {

    this.newRecipe.ingredients?.splice(
      this.newRecipe.ingredients?.findIndex(i => i === ingredient),
      1
    );
  }

  deleteStep(step: string) {
    this.newRecipe.steps.splice(
      this.newRecipe.steps.findIndex(s => s === step),
      1
    );
  }

  addStep() {
    this.newRecipe.steps.push('')
  }

  addIngredient() {
    this.newRecipe.ingredients?.push({} as Ingredient);
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  addRecipe(event: any) {
    this.service.add(this.newRecipe);
    this.router.navigate(['/recipes'])
    console.log(event)
  }

  updateStep(event: any, step: string) {
    console.log(event.target.value);

    this.newRecipe.steps.forEach(s => {
      if (s === step) {
        s = event.target.innerText;
      }
    });
  }

  ngOnInit(): void {
  }

}
