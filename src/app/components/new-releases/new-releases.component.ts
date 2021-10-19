import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css']
})
export class NewReleasesComponent implements OnInit {

  public isCollapsed = false;

  constructor(
    private titleService: Title
    ) {  
    this.titleService.setTitle('Movies App - New releases');
  }

  ngOnInit(): void {
  }
  images = ['../../assets/img1.jpeg','../../assets/img2.jpeg','../../assets/img3.jpeg'];

  

}
