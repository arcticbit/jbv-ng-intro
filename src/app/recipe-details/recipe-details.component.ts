import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe, RecipesService } from '../recipes/recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  id: number;
  recipe$?: Observable<Recipe | undefined>;

  constructor(
    private route: ActivatedRoute,
    private svc: RecipesService,
  ) {
    this.id = parseInt(this.route.snapshot.params['id'], 10);
  }

  ngOnInit(): void {
    this.recipe$ = this.svc.get(this.id);
  }

}
