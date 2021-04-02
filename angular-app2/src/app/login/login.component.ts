import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  message: string;

  //Dependency Injection. In This example we are requesting for accessing the Router API
  constructor(private router: Router){}

  login() {

    if(this.username == 'Apurva' && this.password == '1234') {
    sessionStorage.setItem('loggedInUsername', this.username);
      this.router.navigate(['dashboard']);
    }
    else
    this.message = 'Invalid Username/Password'
  }

}
