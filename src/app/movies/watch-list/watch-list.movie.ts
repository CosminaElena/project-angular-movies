import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.movie.html',
  styleUrls: ['./watch-list.movie.css']
})
export class WatchList implements OnInit {

  // movies: any

  constructor( 
    private titleService: Title
    ) { 
    this.titleService.setTitle('Movies App - Watch-list');
    // this.movies=[
    //   {
    //     'name': "Prison Angels",
    //     'rank': 1,
    //     'year': 1994,
    //     'rating': 9.2
    //   },
  
    //   {
    //     'name': "The Godfather",
    //     'rank': 2,
    //     'year': 1972,
    //     'rating': 9.1
    //   },
  
    //   {
    //     'name': "The Dark Knight",
    //     'rank': 3,
    //     'year': 2008,
    //     'rating': 9.0
    //   },
  
    //   {
    //     "name": "12 Angry Men",
    //     "rank": 4,
    //     "year": 1957,
    //     "rating": 8.9
    //   },
  
    //   {
    //     "name": "Beginning",
    //     "rank": 10,
    //     "year": 2020,
    //     "rating": 6.6
    //   }
    // ]

  }
  ngOnInit(): void {
    console.log('Method not implemented.');
  }


 
}