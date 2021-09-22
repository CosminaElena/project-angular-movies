import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit{
  loggedinUser: any;
  // User: undefined;
  constructor(
    public authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): any {
 
    this.loggedinUser = localStorage.getItem('username');
    if(this.isAuth() ===true) {
    this.loggedinUser;
    return true;
    } else {
      // this.loggedinUser = false;
      return false;
     
    }
  }

  public isAuth() {
    return this.authenticationService.isAuthenticated;
  }

  // loggedin() {

  //   this.loggedinUser = localStorage.getItem('username');
  //   return this.loggedinUser;
  // }

// getUser(){
//   return localStorage.getItem('username');
// }

  logout() {
    localStorage.removeItem('username');
    this.router.navigate(['login']);
  }

}


