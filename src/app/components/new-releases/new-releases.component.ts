import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css']
})
export class NewReleasesComponent implements OnInit {

  constructor(private titleService: Title) {  
    this.titleService.setTitle('Movies App - New releases');}

  ngOnInit(): void {
  }

}
