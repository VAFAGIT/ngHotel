import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../Services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    private router: Router
  ) {
    this.loginForm= this.fb.group({
      email:[''],
      password:['']
    });
  }

  ngOnInit(){}

  loginUser(){
    this.authService.login(this.loginForm.value);
  }
  Register(){
    this.router.navigate(['register']);
  }
}
