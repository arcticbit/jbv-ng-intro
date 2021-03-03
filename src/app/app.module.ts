import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeTitleComponent } from './recipe-title/recipe-title.component';
import { DemoComponent } from './demo/demo.component';
import { RecipesService } from './recipes/recipes.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    RecipeListComponent,
    RecipeTitleComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    RecipesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
