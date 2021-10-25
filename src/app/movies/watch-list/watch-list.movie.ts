import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';
import { MovieModel, movies } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { MovieDetails } from '../movie-details/movie-details.movie';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Movies } from 'src/app/models/movie.model';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.movie.html',
  styleUrls: ['./watch-list.movie.css'],
})
export class WatchList implements OnInit {
  searchMovies: Movies;

  constructor(
    private titleService: Title,
    private movieService: MovieService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.titleService.setTitle('Movies App - Watch-list');
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      (data) => {
        this.searchMovies = data;
        console.log(this.searchMovies);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  navigateToDetails(movieId: number) {
    this.router.navigate(['/movie/movie-details/' + movieId]);
  }
}
