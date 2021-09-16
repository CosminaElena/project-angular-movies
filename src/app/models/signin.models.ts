export class SigninModel {
  username!: string;
  password!: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  getUser() {
    return this.username;
  }

  getPass() {
    return this.password;
  }
}
