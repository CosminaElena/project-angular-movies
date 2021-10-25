import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { MovieModelDetails } from '../models/movie.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Movies } from 'src/app/models/movie.model';
import { classToPlain } from 'class-transformer';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  log: any;
  constructor(private http: HttpClient) {}

  queryString!: number;
  movieId!: number;
  API_KEY = '3fb7a02a89713e12956a6ebf4db798ce';
  searchApiUrl =
    'https://api.themoviedb.org/3/search/movie?api_key=' +
    this.API_KEY +
    '&language=en-US&page=1&query=q';

  getMovies(): Observable<any> {
    return this.http.get<Movies>(this.searchApiUrl).pipe(
      map((data) => {
        return data;
      }),
      catchError((error) => {
        return of(error);
      })
    );
  }

  getMovieDetails(movieId: number): Observable<any> {
    let url =
      'https://api.themoviedb.org/3/movie/' +
      movieId +
      '?api_key=' +
      this.API_KEY +
      '&language=en-US';
    return this.http.get<MovieModelDetails>(url);
  }
}
