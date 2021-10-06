import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {



  constructor(private titleService: Title) {
    this.titleService.setTitle('Movies App - Blog');
  }

  ngOnInit(): void {

  }

  addBlog(title: any, content: any) {
    let blog = {
      title: title.value,
      content: content.value,
    };

    let blogList = localStorage.getItem('blogs');
    let blogs = [];

    if (blogList) {
      blogs = JSON.parse(blogList);
    }

    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));

    console.log(title.value, content.value);
  }
}
