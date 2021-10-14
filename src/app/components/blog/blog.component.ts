import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogs: any = [];
  date! : Date
  constructor(private titleService: Title) {
    this.titleService.setTitle('Movies App - Blog');
  }

  
  ngOnInit(): void {
    let blogList = localStorage.getItem('blogs');
    if (blogList) {
      this.blogs = JSON.parse(blogList);
    }
  }

  
  addBlog(title: any, content: any, image: any,  date : Date) {
    var postDate = new Date();
    let blog = {
      title: title.value,
      content: content.value,
      image: image.value,
      date: postDate
     
    };
    this.blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(this.blogs));
    console.log(blog.title, blog.content, blog.image, blog.date);
  }

  removeBlog(blog: any) {
    let index = this.blogs.indexOf(blog);
    this.blogs.splice(index, 1);
    localStorage.setItem('blogs', JSON.stringify(this.blogs));
  
    // alert('blog has been deleted');
  }
}
