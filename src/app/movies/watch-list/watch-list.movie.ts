import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';
import { MovieModel, movies } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { MovieDetails } from '../movie-details/movie-details.movie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.movie.html',
  styleUrls: ['./watch-list.movie.css'],
})
export class WatchList implements OnInit {
  [x: string]: any;

  id!: number;
  movie!: MovieModel | undefined;
  movieSub$!: Subscription;
  list: WatchList | undefined

  movies$!: Observable<MovieModel[]>;
  constructor(private titleService: Title,
              private movieService: MovieService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

    this.titleService.setTitle('Movies App - Watch-list');
  }



  ngOnInit(): void {
    this.movies$ = this.movieService.getMovies();
  }


  navigateToDetails(id: number){
    this.router.navigate(['/movie/movie-details/' + id]);

   } 






}
