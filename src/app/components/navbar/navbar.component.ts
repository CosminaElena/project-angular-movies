import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

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
    if (this.loggedinAuth !== null && this.loggedinAuth !== "undefined" ) {
      this.loggedinAuth = true;
      return true;
    } else {
      this.loggedinAuth = false;
      return false;
    }
  }

  // ngOnInit(): boolean {
  //   if (this.authenticationService.isAuthenticated) {
  //     this.loggedinUser = localStorage.getItem('username');
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // public isAuth(): boolean {
  //   if (localStorage.getItem('isAuthenticated') !== null) {
  //     // this.authenticationService.isAuthenticated;
  //     return true;
  //   } else {
      
  //     return false;
  //   }
  // }



  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['login']);
  }
}
