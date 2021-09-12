import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthModel } from 'src/app/models/auth.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  authBody = new AuthModel();
  ngOnInit(): void {
    this.authBody.username = 'test@test.com';
    this.authBody.password = 'test1234';
  }

  submit() {
    console.log('test');
  }
}
