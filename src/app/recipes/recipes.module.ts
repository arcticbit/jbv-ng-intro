import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeTitleComponent } from './components/title/recipe-title.component';
import { RecipeListItemComponent } from './components/list-item/recipe-list-item.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { RecipeListComponent } from './components/list/recipe-list.component';
import { RecipeDetailsComponent } from './components/details/recipe-details.component';
import { routes } from './recipes.routing';
import { RecipeFormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';

const exported = [
  RecipeListComponent,
  RecipeDetailsComponent,
]

@NgModule({
  declarations: [
    ...exported,
    RecipeListItemComponent,
    RecipeTitleComponent,
    RecipeFormComponent,
  ],
  exports: [
    ...exported
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BrowserModule,
    FormsModule,
  ]
})
export class RecipesModule { }
