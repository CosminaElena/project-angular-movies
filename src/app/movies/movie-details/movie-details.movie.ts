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
    // console.log(this.id);
    // console.log(typeof(this.id));
    // this.loadMovie();
    this.movieSub$ = this.movieService.movie(this.id).subscribe(movie => {
      this.movie = movie})

      if (this.movie === undefined) {
        this.msg = 'Does not works!';
        console.log(this.msg);
  
      } else {
      console.log(this.movie);

    }
  }


  // moreDetails(){
  //   if(this.exist === false) {
  //     this.msg = 'Does not works!';
  //     console.log(this.msg);
  //     return false
  //   } else{
 
  //     return true;
  //   }
  // }


  // if (this.user === true) {
  //     this.router.navigate(['home']);
  //     console.log('Login Successful');
  //   } else {
  //     console.log('Loggin not Successful');
  //     this.msg = 'Incorrect email or password';
  //   }

}
