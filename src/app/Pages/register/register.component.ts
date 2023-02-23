
import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../Services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  RegisterForm: FormGroup;


  constructor(
    private router:Router,
    private fb:FormBuilder,
    public authService: AuthService
  ) {

    this.RegisterForm= this.fb.group({
      firstname:[''],
      lastname:[''],
      email:[''],
      password:[''],
      password_confirmation:['']
    });
  }

  RegisterUser(){
    this.authService.register(this.RegisterForm.value);
  }
  Login(){
    this.router.navigate(['login']);
  }


}