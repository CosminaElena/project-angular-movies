import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  loggedinUser: any;
  loggedinAuth: any;
  constructor(
    public authenticationService: AuthenticationService,
    private router: Router
  ) {}



  ngOnInit(): any{
    this.loggedinAuth = localStorage.getItem('isAuthenticated');
    this.loggedinUser  = localStorage.getItem('username');
   
  }

  public isAuth(): boolean {
    if (this.loggedinUser !== null && this.loggedinUser !== "undefined" ) {
      this.loggedinAuth === true;
      return true;
    } else {
      this.loggedinAuth === false;
      return false;
    }
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['login']);
  }
}
