import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  // blogs: any;
	// public imageUrls: SafeUrl[];
	// private lastObjectUrl: string;
	// private sanitizer: DomSanitizer


blogs: any = []


  constructor(private titleService: Title,
              // sanitizer: DomSanitizer
  ) {

    this.titleService.setTitle('Movies App - Blog');
    // this.sanitizer = sanitizer;
		// this.imageUrls = [];
		// this.lastObjectUrl = "";
  }


  ngOnInit(): void {
   let blogList = localStorage.getItem("blogs");
  	if(blogList){
  		this.blogs = JSON.parse(blogList)
  	}

  }

  addBlog(title: any, content: any, image: any) {
    let blog = {
    title: title.value,
    content: content.value,
    image: image.value,
  
    };
    this.blogs.push(blog)
  	localStorage.setItem("blogs",JSON.stringify(this.blogs));
    console.log(blog.title, blog.content, blog.image);
 
  }

  }

  //   this.lastObjectUrl = URL.createObjectURL( pastedImage );
  //   this.imageUrls.unshift(
	// 	this.sanitizer.bypassSecurityTrustUrl( this.lastObjectUrl )
	



  
  

	

