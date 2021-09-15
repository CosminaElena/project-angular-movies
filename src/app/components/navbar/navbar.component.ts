import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public authenticationService: AuthenticationService) {}

  public isAuth() {
    return this.authenticationService.isAuthenticated;
  }
}
