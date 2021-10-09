import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogs: any;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Movies App - Blog');
  }

  ngOnInit(): void {
    let blogList = localStorage.getItem('blogs');
    if (blogList) {
      this.blogs = JSON.parse(blogList);
    }
  }

  addBlog(name: any, content: any) {
    let blog = {
      name: name.value,
      content: content.value,
    };

    this.blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(this.blogs));

    console.log(blog.name, blog.content);
  }
}
