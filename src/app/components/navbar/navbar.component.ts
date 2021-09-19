import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  loggedinUser: any;
  constructor(
    public authenticationService: AuthenticationService,
    private router: Router
  ) {}

  public isAuth() {
    return this.authenticationService.isAuthenticated;
  }

  loggedin() {
    // return localStorage.getItem('username');
    this.loggedinUser = localStorage.getItem('username');
    return this.loggedinUser;
  }

  logout() {
    localStorage.removeItem('username');
    this.router.navigate(['login']);
  }
}
