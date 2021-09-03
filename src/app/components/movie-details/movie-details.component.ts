import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    const snapshot= activatedRoute.snapshot;
    const id = snapshot.params["movieId"];
    console.log(id);
    
    
   }

  ngOnInit(): void {
  }

}
