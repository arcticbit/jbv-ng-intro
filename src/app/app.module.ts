import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesService } from './recipes/state/recipes.service';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { RecipesQuery } from './recipes/state/recipes.query';
import { RecipesStore } from './recipes/state/recipes.store';
import { RecipesModule } from './recipes/recipes.module';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AkitaNgDevtools.forRoot(),
    RecipesModule,
  ],
  providers: [
    RecipesService,
    RecipesQuery,
    RecipesStore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
