import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MovieModelDetails } from 'src/app/models/movie.model';
import { of, Subscription } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';
import { WatchList } from '../watch-list/watch-list.movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.movie.html',
  styleUrls: ['./movie-details.movie.css'],
})
export class MovieDetails implements OnInit {
  movieId: number;
  movie: MovieModelDetails;
  msg: string;
  title = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private movieService: MovieService,
    private router: Router
  ) {
    this.titleService.setTitle('Movies App - Details');
  }

  ngOnInit() {
    this.loadMovie();
  }

  loadMovie() {
    this.movieId = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.movieService.getMovieDetails(this.movieId).subscribe((data) => {
      this.movie = data;
    });

    if (this.movie === undefined) {
      this.msg = 'Does not works!';
      // console.log(this.msg);
    } else {
      console.log(this.movie);
    }
  }
}
