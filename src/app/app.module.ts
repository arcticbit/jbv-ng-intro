import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeTitleComponent } from './recipe-title/recipe-title.component';
import { DemoComponent } from './demo/demo.component';
import { RecipesService } from './recipes/recipes.service';
import { RecipesService as AkitaRecipesService } from './recipes/state/recipes.service';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeListItemComponent } from './recipe-list-item/recipe-list-item.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { RecipesQuery } from './recipes/state/recipes.query';
import { RecipesStore } from './recipes/state/recipes.store';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    RecipeListComponent,
    RecipeTitleComponent,
    DemoComponent,
    MainComponent,
    RecipeDetailsComponent,
    RecipeListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AkitaNgDevtools.forRoot()
  ],
  providers: [
    RecipesService,
    AkitaRecipesService,
    RecipesQuery,
    RecipesStore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
