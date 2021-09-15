import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';
import { SigninModel } from 'src/app/models/signin.models';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submit(loginForm: NgForm) {
    console.log(loginForm.value);
    console.log('Submit works!');
    const signinModel = new SigninModel(
      loginForm.value.username,
      loginForm.value.password
    );
    this.authenticationService.authenticate(signinModel);
    this.router.navigate(['home']);
  }

  // public isAuth() {

  //   return this.authenticationService.isAuthenticated;

  // }
}
