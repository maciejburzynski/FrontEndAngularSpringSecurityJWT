import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from "./login.service";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginResponse} from "./LoginResponse";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
  }

  login(): any {
    console.log("username: " + this.username + "password: " + this.password)
    return this.loginService.loginUser({username: this.username, password: this.password})
      .subscribe((response: any) => {
        let data = (<LoginResponse>response);
        console.log(data.token)
        if (data.token !== null) {
          this.router.navigateByUrl('')
        }
      })


  }

  ngOnInit(): void {
  }
}
