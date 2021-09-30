import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of, pipe } from "rxjs";
import { mergeMap } from 'rxjs/operators';
import { MovieModel, movies } from "../models/movie.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
    providedIn:'root'
})

export class MovieService {
    private ROOT_URL = 'http://localhost:4200/movies';

    constructor(private http: HttpClient) {}

 getMovies() {
    return of(movies);
 }



// getMoviesFromHttp() {
//   return this.http.get<MovieModel[]>(this.ROOT_URL);
// } 


movie(id: number): Observable<MovieModel | undefined> {
     return of(movies.find(movie => +movie.id === +id));
  }

  // movieFromHttp(id: number) {
  //   return this.http.get<MovieModel>(`${this.ROOT_URL}/${id}`);
  // }


}


 