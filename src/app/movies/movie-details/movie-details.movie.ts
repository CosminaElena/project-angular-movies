import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Title} from '@angular/platform-browser';
import { MovieModel } from 'src/app/models/movie.model';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.movie.html',
  styleUrls: ['./movie-details.movie.css']
})
 
export class MovieDetails implements OnInit,  OnDestroy {
  id!: number;
  movie!: MovieModel | undefined;
  movieSub$!: Subscription;
 

  constructor(private activatedRoute: ActivatedRoute,
            private titleService: Title,
            private movieService: MovieService) {    
      this.titleService.setTitle('Movies App - Details');
   }

   
  ngOnDestroy(): void {
    this.movieSub$.unsubscribe();
  }

  ngOnInit() {

    this.loadMovie();
  }

  
  loadMovie(){
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.id);
    console.log(typeof(this.id));
    this.movieSub$ = this.movieService.movie(this.id).subscribe(movie => {
      this.movie = movie; 
      if (this.movie === undefined) {
        console.log("error");
        return false;
      } else {
      console.log(this.movie);
      return true;
      }
    })
  }



}
