import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRequest} from "./LoginRequest";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private httpClient: HttpClient) {
  }

  loginUser(loginRequest: LoginRequest) {
    return this.httpClient.post("http://localhost:8080/login/users", loginRequest)
  }

  getHello() {
    return this.httpClient.get("http://localhost:8080/hello-user")
    console.log(this.httpClient.get("http://localhost:8080/hello-user"))
  }
}
