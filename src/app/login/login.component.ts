import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  result: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  login(event, userName, password) {
    event.preventDefault();
    this.http.get('http://localhost:8080/login?userName='+userName+'&password='+password).subscribe(result => {
    //this.http.get('http://localhost:8080/customer/1').subscribe(result => {
      this.result = result;
    });
  }
}
