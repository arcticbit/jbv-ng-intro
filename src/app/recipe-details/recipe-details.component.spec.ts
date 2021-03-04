import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes/recipes.service';

import { RecipeDetailsComponent } from './recipe-details.component';

class MockRecipesService {
  get(id: number) {}
}

class MockActivatedRoute {
  snapshot = { params: { id: 1 }};
}

describe('RecipeDetailsComponent', () => {
  let component: RecipeDetailsComponent;
  let fixture: ComponentFixture<RecipeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDetailsComponent ],
      providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
        { provide: RecipesService, useClass: MockRecipesService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should concatenate ingredient quantity and name into one string', () => {
    const expectation = "100 eggs";
    const output = component.getIngredientText({
      quantity: '100',
      name: 'eggs',
      type: 'poultry'
    });

    expect(output).toEqual(expectation);
  })
});
