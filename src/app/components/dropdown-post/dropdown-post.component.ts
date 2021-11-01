import { EventEmitter, Input, Output } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { movies, Movies } from "src/app/models/movie.model";

@Component({
    selector: 'app-dropdown-post',
    templateUrl: './dropdown-post.component.html',
    // styleUrls: ['./dropdown-post.component.css'],
})



export class DropDownPost implements OnInit {

  @Input() movieslist: Movies;

  @Output() chooseEvent: EventEmitter<any> = new EventEmitter();

movieSelected: any;


constructor( private router: Router,
             private activatedRoute: ActivatedRoute) {}


 ngOnInit(): void {
  //  this.movieSelected = this.movieslist.results;

 }



callParentChoose(){
  this.chooseEvent.emit(this.movieSelected);
}



}


