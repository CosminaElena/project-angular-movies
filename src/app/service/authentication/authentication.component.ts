import { Component, OnInit } from '@angular/core';
import { SigninModel } from 'src/app/models/signin.models';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  authenticate(signinModel: SigninModel) {
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
