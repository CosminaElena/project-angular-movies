import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MovieModel } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.movie.html',
  styleUrls: ['./movies.movie.css'],
})
export class Movies implements OnInit {


  movie!: MovieModel;
  constructor(private titleService: Title) {
    this.titleService.setTitle('Movies App - Movies');
  }

  ngOnInit(): void {}
}
