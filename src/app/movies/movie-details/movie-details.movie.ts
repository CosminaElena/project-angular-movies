import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Title} from '@angular/platform-browser';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.movie.html',
  styleUrls: ['./movie-details.movie.css']
})
export class MovieDetails implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private titleService: Title
    ) {
      this.titleService.setTitle('Movies App - Details');
    const snapshot= activatedRoute.snapshot;
    const id = snapshot.params["movieId"];
    console.log(id);
    
    
   }

   

  ngOnInit(): void {
  }

}
