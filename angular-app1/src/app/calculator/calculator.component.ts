import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  template: `
    <form>
      Enter first number : <input type = "text" name = "t1" [(ngModel)]=fno /> <br /><br />
      Enter second number : <input type = "text" name = "t2" [(ngModel)]=sno /> <br /><br />

      <button type = "submit" (click) = addition()> Add </button>
      <button type = "submit" (click) = subtraction()> Substract </button><br /><br />   
    </form>
    <div *ngIf = "fno && sno">
      Addition of {{ fno }} and {{ sno }} is {{ addres }} <br /><br />
      Subtraction of {{ fno }} and {{ sno }} is {{ subres }}
    </div>

 
  `,
  styles: [
  ]
})
export class CalculatorComponent  {
  fno: number;
  sno: number;
  addres: number;
  subres: number;

  addition(){
    this.addres = +this.fno + +this.sno;
    //alert(this.addres + " ");
  }

  subtraction(){
    this.subres = +this.fno - +this.sno;
    //alert(this.subres + " ");
  }
}