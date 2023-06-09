import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterRequest} from "./RegisterRequest";
import {LoginResponse} from "../login/LoginResponse";
import {RegisterResponse} from "./RegisterResponse";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
  }

  registerUser(registerRequest: RegisterRequest) {
    return this.httpClient
      .post("http://localhost:8080/registration/users", registerRequest,
        {observe: ('response'), withCredentials: true})
      .subscribe((response: any) => {
        let data = (<RegisterResponse>response);
        console.log(response)
        if (data.token !== null) {
          this.router.navigateByUrl('/account-activation')
        }
      })
  }
}
