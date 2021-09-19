import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninModel } from 'src/app/models/signin.models';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  admin: any;
  user: any;
  loginForm: any;
  loggedinUser!: string;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = localStorage.getItem('username');
    // console.log(this.user);
  }

  submit(loginForm: NgForm) {
    console.log(loginForm.value);

    const signinModel = new SigninModel(
      loginForm.value.username,
      loginForm.value.password
    );

    this.user = this.authenticationService.authenticate(signinModel);
    localStorage.setItem('username', signinModel.getUser());
    if (this.user === true) {
      this.router.navigate(['home']);
      console.log('Login Successful');
    } else {
      console.log('Loggin not Successful');
    }
  }

  public isAuth() {
    return this.authenticationService.isAuthenticated;
  }
}
