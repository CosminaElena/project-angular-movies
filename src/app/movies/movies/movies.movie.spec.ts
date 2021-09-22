import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Movies } from './movies.movie';

describe('MoviesComponent', () => {
  let component: Movies;
  let fixture: ComponentFixture<Movies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Movies ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Movies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
