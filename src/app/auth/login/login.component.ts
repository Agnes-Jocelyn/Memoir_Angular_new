import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide= true;

  loginForm: FormGroup;
  errorMessage:string;
  verifyEmail :any;
  isLoading: boolean=true;



  constructor(
    private router : Router, 
    public formBuilder : FormBuilder, 
    public authService : AuthService
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]],
  })
}

async login(){
  this.isLoading = true;

  this.authService.login(this.loginForm.value)
    .then(res => {
        console.log('User Data: ', res);
        this.router.navigate(['/home']);
        this.isLoading = false;
      }) 
    .catch(err => {
        this.errorMessage =err.error;
        this.isLoading = false;
      })
  }


}
