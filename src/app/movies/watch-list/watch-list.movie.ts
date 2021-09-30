import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { MovieModel } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { MovieDetails } from '../movie-details/movie-details.movie';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.movie.html',
  styleUrls: ['./watch-list.movie.css'],
})
export class WatchList implements OnInit {
  [x: string]: any;
 
  movies$!: Observable<MovieModel[]>;
  constructor(private titleService: Title,
              private movieService: MovieService) {

    this.titleService.setTitle('Movies App - Watch-list');
  }

  ngOnInit(): void {
    this.movies$ = this.movieService.getMovies();
        // this.movies$ = this.movieService.getMoviesFromHttp();
       
  }

  // moreDetails(){
  //   if(this.loadMovie === true ){
  //     console.log("ssss");
  //     // this.router.navigate(['/movies', 'movie-details']);
  //     // return this.movie;
  //   } else {
  //     console.log("ERROR");
  //   }
  // }


}
