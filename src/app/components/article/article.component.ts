import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(
    private titleService: Title,

  ) { 
    this.titleService.setTitle('Movies App - Article');

  }

  ngOnInit(): void {
  }

}
