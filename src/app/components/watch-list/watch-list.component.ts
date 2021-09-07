import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {

  movies: any

  constructor() { 
    this.movies=[
      {
        'name': "Prison Angels",
        'rank': 1,
        'year': 1994,
        'rating': 9.2
      },
  
      {
        'name': "The Godfather",
        'rank': 2,
        'year': 1972,
        'rating': 9.1
      },
  
      {
        'name': "The Dark Knight",
        'rank': 3,
        'year': 2008,
        'rating': 9.0
      },
  
      {
        "name": "12 Angry Men",
        "rank": 4,
        "year": 1957,
        "rating": 8.9
      },
  
      {
        "name": "Beginning",
        "rank": 10,
        "year": 2020,
        "rating": 6.6
      }
    ]

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 
}