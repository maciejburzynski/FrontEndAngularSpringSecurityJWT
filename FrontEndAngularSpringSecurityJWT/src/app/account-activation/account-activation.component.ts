import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivationService} from "./activation.service";

@Component({
  selector: 'app-account-activation',
  templateUrl: './account-activation.component.html',
  styleUrls: ['./account-activation.component.css']
})
export class AccountActivationComponent {
  activationCode: any

  activationCodeForm: FormGroup = new FormGroup({
    activationCode: new FormControl(
      null, [Validators.required, Validators.pattern("^[0-9]*$")])
  });


  constructor(
    private activationService: ActivationService
  ) {
  }

  sendToVerify() {
    console.log("Activation code typed: " + this.activationCode)
    return this.activationService.activateUser({activationCode: this.activationCode})
  }
}
