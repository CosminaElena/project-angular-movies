import { Injectable } from '@angular/core';

import { Observable, of, throwError} from 'rxjs';

import { MovieModel, movies } from '../models/movie.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return of(movies);
  }

  movie(id: number): Observable<MovieModel | undefined> {
    return of(movies.find((movie) => +movie.id === +id));
  }
}
