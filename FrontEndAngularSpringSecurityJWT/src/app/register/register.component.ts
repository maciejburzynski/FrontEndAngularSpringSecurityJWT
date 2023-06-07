import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {RegisterService} from "./register.service";
import {Router} from '@angular/router';


function matchPasswords(controlName: string, matchingControlName: string): ValidationErrors {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];

    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
      // return if another validator has already found an error on the matchingControl

      return null;
    }

    // return error if validation fails

    let errors = null;
    if (control.value !== matchingControl.value) {
      errors = {mustMatch: true};
    }
    matchingControl.setErrors(errors);
    return errors;
  };
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService,
              private router: Router) {
  }

  username = '';
  email = '';
  password = '';
  repeatedPassword = '';

  registerForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    repeatedPassword: new FormControl(null, [Validators.required]),
  }, matchPasswords('password', 'repeatedPassword'));

  register(): any {
    return this.registerService.registerUser(
      {username: this.username, email: this.email, password: this.password})
  }

  ngOnInit(): void {
  }
}
