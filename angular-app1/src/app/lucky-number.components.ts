import { Component } from "@angular/core";

@Component({
    selector: 'lucky-number',
    template: `
            <div class="{{ style }}">Welcome to Bhavishyavaani.com</div>
            <button (click)="generate()">Click here</button> to reveal your luck
            <h1 *ngIf="luckyNumber"> your lucky noumer is {{ luckyNumber }}</h1>

            `,
            styles: 
                [ 'h1 { color: red}',
                '.info { font-weight: bold; font-size:30px; color: green;',
                '.info2 { text-shadow: 5px 5px 5px red; }' ]
})
export class LuckyNumberComponent {
    luckyNumber: number;
    style: string = "info";

    generate() {
        this.luckyNumber = Math.ceil(Math.random()* 10);
        this.style = "info info2";
    }
    
}