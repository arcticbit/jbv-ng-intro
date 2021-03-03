import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeTitleComponent } from './recipe-title/recipe-title.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    RecipeListComponent,
    RecipeTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
