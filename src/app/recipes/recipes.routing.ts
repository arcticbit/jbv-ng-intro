import { Route } from "@angular/router";
import { RecipeDetailsComponent } from "./components/details/recipe-details.component";
import { RecipeFormComponent } from "./components/form/form.component";
import { RecipeListComponent } from "./components/list/recipe-list.component";

export const routes: Route[] = [
  { path: 'recipes', component: RecipeListComponent },
  { path: 'recipes/new', component: RecipeFormComponent },
  { path: 'recipes/:id', component: RecipeDetailsComponent },
]
