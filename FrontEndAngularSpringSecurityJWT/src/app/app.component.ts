import {Component, OnInit} from '@angular/core';
import {LoginService} from "./login.service";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FrontEndAngularSpringSecurityJWT';

  username = '';
  password = '';
  header = new HttpHeaders();

  constructor(private loginService: LoginService) {
  }

  login() {
    return this.loginService
      .loginPost({username: this.username, password: this.password})
      .subscribe((response: any) => this.setTokenInHeaders(response.token))

  }

  setTokenInHeaders(token: any) {
    this.header = this.header.set("Authorization", "Bearer " + token)
    console.log(this.header.get("Authorization"))
    this.loginService.getHello()

  }

  ngOnInit(): void {
  }
}
