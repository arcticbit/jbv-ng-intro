import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipesService } from '../../state/recipes.service';

import { RecipeListComponent } from './recipe-list.component';

class MockRecipesService {
  list() {}
}

describe('RecipeListComponent', () => {
  let component: RecipeListComponent;
  let fixture: ComponentFixture<RecipeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeListComponent ],
      providers: [
        { provide: RecipesService, useClass: MockRecipesService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
