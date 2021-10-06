import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Title} from '@angular/platform-browser';
import { MovieModel } from 'src/app/models/movie.model';
import { of, Subscription } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';
import { WatchList } from '../watch-list/watch-list.movie';




@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.movie.html',
  styleUrls: ['./movie-details.movie.css']
})
 
export class MovieDetails implements OnInit{
title=true;

  msg = '';
  id!: number;
  movie!: MovieModel | undefined;
  movieSub$!: Subscription;
  list: WatchList | undefined
  exist!: boolean;


  constructor(private activatedRoute: ActivatedRoute,
            private titleService: Title,
            private movieService: MovieService,
            private router: Router) {    
      this.titleService.setTitle('Movies App - Details');
   }
  //  exist = this.movie;

  ngOnInit() {
    this.loadMovie();
  }


  loadMovie(){
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.movieSub$ = this.movieService.movie(this.id).subscribe(movie => {
      this.movie = movie})

      if (this.movie === undefined) {
        this.msg = 'Does not works!';
        console.log(this.msg);
  
      } else {
      console.log(this.movie);

    }
  }




}
