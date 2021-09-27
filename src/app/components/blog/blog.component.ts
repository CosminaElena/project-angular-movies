import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor( 
    private titleService: Title
     ) { 
    this.titleService.setTitle('Movies App - Blog');

  }

  ngOnInit(): void {
  }

}
