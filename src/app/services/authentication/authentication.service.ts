import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SigninModel } from 'src/app/models/signin.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(  
    private router: Router) {}
 
  private readonly testUser = new SigninModel('test@mail.com', 'Test1234');

  isAuthenticated = false;
  loggedinUser: any;
  loggedinAuth: any;

  authenticate(signinModel: SigninModel): boolean {
    
    if (this.checkCredentials(signinModel)) {
      this.isAuthenticated = true;
      localStorage.setItem('username', signinModel.getUser());
      localStorage.setItem('isAuthenticated', JSON.stringify(this.isAuthenticated));
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }
  
  private checkCredentials(signinModel: SigninModel): boolean {
    return (
      this.checkUser(signinModel.getUser()) &&
      this.checkPass(signinModel.getPass())
    );
  }

  private checkUser(username: string): boolean {
    return username === this.testUser.getUser();
  }

  private checkPass(password: string): boolean {
    return password === this.testUser.getPass();
  }


  public isAuth(): boolean {
    this.loggedinAuth = localStorage.getItem('isAuthenticated');
    this.loggedinUser  = localStorage.getItem('username');
    if (this.loggedinUser !== null && this.loggedinUser !== "undefined" ) {
      this.loggedinAuth === true;
      return true;
    } else {
      this.loggedinAuth === false;
      return false;
    }
  }

  logout(){
    localStorage.removeItem('username');
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['login']);
  }

}
