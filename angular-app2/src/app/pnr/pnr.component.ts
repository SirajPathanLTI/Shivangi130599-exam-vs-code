import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pnr',
  templateUrl: './pnr.component.html',
  styleUrls: ['./pnr.component.css']
})
export class PnrComponent {

  pnrNo: number;
  pnrStatus: object;

  constructor(private http: HttpClient) {}

  check( ) {
    let url = "http://localhost:8181/rest-app/api/pnr?pnrNo="+this.pnrNo;
    this.http.get(url).subscribe(data => {
    alert(JSON.stringify(data));
    this.pnrStatus = data;
    });
  }
  /*process(response ){
    this.pnrStatus=response;
    //alert(JSON.stringify(data));
  }*/
}
