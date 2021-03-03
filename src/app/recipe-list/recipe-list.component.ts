import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: string[];

  constructor() {
    this.recipes = [
      'Pasta och köttfärssås',
      'Blodpudding',
      'Kebabpizza',
    ];

  }

  ngOnInit(): void {
  }

}
