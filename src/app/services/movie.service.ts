import { Injectable } from '@angular/core';

import { Observable, of} from 'rxjs';

import { MovieModel, movies } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  getMovies() {
    return of(movies);
  }

  movie(id: number): Observable<MovieModel | undefined> {
    return of(movies.find((movie) => +movie.id === +id));
  }
}
