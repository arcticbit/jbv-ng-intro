import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-title',
  templateUrl: './recipe-title.component.html',
  styleUrls: ['./recipe-title.component.scss']
})
export class RecipeTitleComponent implements OnInit {

  @Input() title?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
