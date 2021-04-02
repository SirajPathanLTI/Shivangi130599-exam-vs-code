import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { allowedNodeEnvironmentFlags } from 'node:process';

@Component({
  selector: 'app-register2',
  template: `
    <form #regForm="ngForm" (ngSubmit)="register(regForm)">
      <div>Enter name : <input type="text" name="name" #name="ngModel" [(ngModel)]=user.name /> </div>
      <div>Enter email : <input type="email" name="email" #email="ngModel" [(ngModel)]=user.email /> </div>
      <div>Enter password : <input type="password" name="password" #password="ngModel" [(ngModel)]=user.password /> </div>
      <div>Enter city : <input type="text" name="city" #city="ngModel" [(ngModel)]=user.address.city /> </div>
      <div>Enter pincode : <input type="number" name="pincode" #pincode="ngModel" [(ngModel)]=user.address.pincode /> </div>
      <button type="submit"> Register</button>
    </form>
  `,
  styles: [
  ]
})
export class Register2Component {

  user: User = new User();

  register(f: NgForm) {
    if(f.valid)
      console.log(this.user);
    else
      alert("Plese fix all the errors in the form and submit again..")
      //TODO: instead show the below message on the page
   }
}

export class User {
  name: string;
  email: string;
  password: string;
  address: Address = new Address();
}

export class Address {
  city: string;
  pincode: number;
}
