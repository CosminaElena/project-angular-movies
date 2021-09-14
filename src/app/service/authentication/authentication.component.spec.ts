

import { Injectable } from "@angular/core";
import { SigninModel } from "src/app/models/signin.models";


@Injectable({
  providedIn: 'root'
})

export class AuthenticationComponent {
  private readonly testUser = new SigninModel('test@email.com', 'test1234');
  isAuthenticated = false;

  constructor() {}

  authenticate(signinModel: SigninModel):boolean {
    if(this.checkCredentials(signinModel)){
      this.isAuthenticated = true;
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(signinModel: SigninModel): boolean {
return this.checkUser(signinModel.getUser()) && this.checkPass(signinModel.getPass());
  }

  private checkUser(username: string): boolean {
return username === this.testUser.getUser();
  }

  private checkPass(password: string): boolean {
    return password === this.testUser.getPass();
  
  }
}
