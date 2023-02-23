import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from "../../Services/auth.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {


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