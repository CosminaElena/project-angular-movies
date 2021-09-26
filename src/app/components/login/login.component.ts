import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninModel } from 'src/app/models/signin.models';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  admin: any;

  loginForm: any;
  loggedinUser!: string;
  msg = '';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private titleService: Title
  ) {
    this.titleService.setTitle('Movies App - Login');
  }

  ngOnInit() {
    // this.User = localStorage.getItem('username');
    // console.log(this.user);
  }

  submit(loginForm: NgForm) {
    console.log(loginForm.value);

    const signinModel = new SigninModel(
      loginForm.value.username,
      loginForm.value.password
    );

    this.user = this.authenticationService.authenticate(signinModel);
  
    if (this.user === true) {
      this.router.navigate(['home']);
      console.log('Login Successful');
    } else {
      console.log('Loggin not Successful');
      this.msg = 'Incorrect email or password';
    }
  }


}
