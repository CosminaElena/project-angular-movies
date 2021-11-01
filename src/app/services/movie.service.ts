import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { MovieModelDetails } from '../models/movie.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Movies } from 'src/app/models/movie.model';
import { classToPlain } from 'class-transformer';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  log: any;
  constructor(private http: HttpClient) {}

  movieId!: number;
  // API_KEY = 'api_key=3fb7a02a89713e12956a6ebf4db798ce';

  // params = new HttpParams({
  //   fromString:
  //     'api_key=3fb7a02a89713e12956a6ebf4db798ce&language=en-US&page=1&query=q',
  // });

  getMovies(): Observable<any> {
    let params = new HttpParams();
    params = params.append('language', 'en-US');
    params = params.append('_page', 1);
    params = params.append('query', 'q');

    return this.http
      .get<Movies>('https://api.themoviedb.org/3/search/movie?', {
        params: params
      })
      .pipe(
        catchError((error) => {
          return of(error);
        })
      );
  }

  getMovieDetails(movieId: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('language', 'en-US');
    params = params.append('_page', 1);
    params = params.append('query', 'q');
    return this.http.get<MovieModelDetails>(
      'https://api.themoviedb.org/3/movie/' + movieId,
      { params: params }
    );
  }
}
