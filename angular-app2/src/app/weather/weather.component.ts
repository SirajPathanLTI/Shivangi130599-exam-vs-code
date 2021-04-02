import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  city: string;

  //this time we need to use HttpClient API
  //HttpClient is nothing but Angular's AJAX implementation

  constructor(private http: HttpClient){}

  process(){
    let url = "http://api.openweathermap.org/data/2.5/weather?q="+this.city+"&appid=138b91f7502c917df454a94449df5c18"
    this.http.get(url).subscribe(Response => {
      alert(JSON.stringify(Response))
    })
  }

}
