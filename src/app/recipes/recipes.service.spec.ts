import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of, Observable } from 'rxjs';

import { Recipe, RecipesService } from './recipes.service';

class MockHttpClient {
  mockData: Recipe[] = [
    { id: 0, name: 'hello world', ingredients: [], steps: [], imageURL: 'about:blank'}
  ];

  get(url: string): Observable<Recipe[]> {
    return of(this.mockData)
  }
}

describe('RecipesService', () => {
  let service: RecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RecipesService,
        { provide: HttpClient, useClass: MockHttpClient }
      ]
    });
    service = TestBed.inject(RecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch a list of recipes', () => {
    const obs = service.list();
    obs.subscribe(r => {
      expect(r.length).toEqual(1)
      expect(r[0].id).toEqual(0)
      expect(r[0].name).toEqual('hello world')
    })
  })
  it('should fetch a single recipe when supplied with an id', () => {
    const obs = service.get(0);
    obs.subscribe(r => {
      expect(r).toBeDefined();
      expect(r!.name).toEqual('hello world')
    })
  })
  it('should not return any recipe if the id is invalid', () => {
    const obs = service.get(900);
    obs.subscribe(r => {
      expect(r).toBeUndefined();
    })
  })
});
