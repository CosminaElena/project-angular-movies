import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.movie.html',
  styleUrls: ['./movies.movie.css']
})
export class Movies implements OnInit {

  constructor( private titleService: Title) {
    this.titleService.setTitle('Movies App - Movies'); }

  ngOnInit(): void {
  }

}
