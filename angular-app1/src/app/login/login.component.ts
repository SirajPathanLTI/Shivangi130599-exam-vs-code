import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <form (ngSubmit)= "login()">
  Enter username : <input type="text" name="t1" [(ngModel)]=username /> <br />
  Enter password : <input type="password" name="t2" [(ngModel)]=username /> <br />
  <button type="submit">Login</button>
  </form>
  <div *ngIf="message">{{ message }}</div>
  `,
  styles: [
  ]
})

export class LoginComponent {

  username: string;
  password: string;
  message: string;

  login() {

    if(this.username == 'majrul' && this.password == '123')
      this.message = 'login sucessful!';
    else
    this.message = 'login failed'
  }
}


