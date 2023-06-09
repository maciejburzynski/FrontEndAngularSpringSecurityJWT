import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ActivationRequest} from "./ActivationRequest";

@Injectable({
  providedIn: 'root'
})
export class ActivationService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
  }

  activateUser(activationRequest: ActivationRequest) {
    return this.httpClient.post("http://localhost:8080/activation/users", activationRequest,
      {observe: ('response'), withCredentials: true})
      .subscribe((response: any) => {
        console.log(response)
        if (response.status === 200) {
          this.router.navigateByUrl('')
        }
      })
  }
}
