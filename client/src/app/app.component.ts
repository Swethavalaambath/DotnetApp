import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
users:any;
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get('https://localhost:7154/api/users').subscribe({
      next:response=>this.users=response,
      error:error=>console.log('error'),
      complete:()=>console.log('request has completed')
    })
  }
  title = 'Dating App';
}
