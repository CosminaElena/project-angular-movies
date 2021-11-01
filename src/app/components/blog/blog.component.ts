import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogs: any = [];
  date!: Date;
  rate!: any;
  dropdown: Movies;



  constructor(
    private titleService: Title,
    private movieService: MovieService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.titleService.setTitle('Movies App - Blog');
  }

  ngOnInit(): void {
    let blogList = localStorage.getItem('blogs');
    if (blogList) {
      this.blogs = JSON.parse(blogList);
    }
    this.dropdownMovies();
  }

  addBlog(title: any, content: any, image: any, date: Date, rate: any) {
    let postDate = new Date();
    let currentRate = 7;
    let blog = {
      title: title.value,
      content: content.value,
      image: image.value,
      date: postDate,
      rate: currentRate,
    };
    this.blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(this.blogs));
    console.log(blog.title, blog.content, blog.image, blog.date, blog.rate);
  }

  removeBlog(blog: any) {
    let index = this.blogs.indexOf(blog);
    this.blogs.splice(index, 1);
    localStorage.setItem('blogs', JSON.stringify(this.blogs));

    // alert('blog has been deleted');
  }

  dropdownMovies() {
    this.movieService.getMovies().subscribe(
      (data) => {
        this.dropdown = data;
        console.log(this.dropdown);
      },
      (error) => {
        console.error(error);
      }
    );

  }

  choose(movieSelected: any) {
    alert('The name of the selected movie is ' + movieSelected);


  }
}
