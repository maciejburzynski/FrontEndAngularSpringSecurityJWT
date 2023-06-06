import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from "./register.service";
import {Router} from '@angular/router';

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
  });

  register(): any {
    return this.registerService.registerUser(
      {username: this.username, email: this.email, password: this.password})
  }

  ngOnInit(): void {
  }
}
