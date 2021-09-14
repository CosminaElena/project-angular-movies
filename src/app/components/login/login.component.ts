import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SigninModel } from 'src/app/models/signin.models';
import { AuthenticationComponent } from 'src/app/service/authentication/authentication.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})


export class LoginComponent implements OnInit {
  constructor(private authenticationComponent: AuthenticationComponent) {}

  
  ngOnInit(): void {
    // this.authBody.username = 'test@test.com';
    // this.authBody.password = 'test1234';
  }

  submit(loginForm: NgForm) {
    console.log(loginForm.value);
    const signinModel = new SigninModel(loginForm.value.username, loginForm.value.password);
    this.authenticationComponent.authenticate(signinModel);
  }
}
