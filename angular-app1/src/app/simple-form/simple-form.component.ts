import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
   <form>
   <form (ngSubmit)="doSomething()">
   Enter Your Name : <input type="text" name="t1" [(ngModel)]=name /> <br />
   Enter Your Janam Din : <input type="date" name="t2" [(ngModel)]=dob /> <br />
   <button type="submit">Submit</button>
   </form>
   <div *ngIf="check">
   Hello {{name}}, you have been troubling peoples on planet earth since {{ dob }}
   </div>
  `,
  styles: [
  ]
})
export class SimpleFormComponent {

  name: string; //we want whatever the user enters in the textfield above to be stored here
  dob: string;
  check: boolean;

  doSomething() {
    alert(this.name+ " " + this.dob);
    this.check = true;
    this.name = this.name.toUpperCase();

  }
}
