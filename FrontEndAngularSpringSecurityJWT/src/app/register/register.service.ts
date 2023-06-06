import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterRequest} from "./RegisterRequest";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) {
  }

  registerUser(registerRequest: RegisterRequest) {
    return this.httpClient.post("http://localhost:8080/users", registerRequest,{observe: ('response')})
      .subscribe(response => console.log(response))
  }
}
