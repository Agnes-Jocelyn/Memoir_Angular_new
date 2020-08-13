import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage:string;
  verifyEmail :any;
  isLoading: boolean=false;

  constructor(
    private router : Router, 
    public formBuilder : FormBuilder, 
    public authService : AuthService
    ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required]],
      confirmPassword: ['', Validators.required]

    })
  }

  async register(){
    this.isLoading = true;
    try{
      this.authService.createUser(this.registerForm.value)
        .then(res => {
          console.log('USER DATA: ',res);
          
          this.router.navigate(['/']);
          this.isLoading = false;
        })
    }
    catch(err){
      this.errorMessage =err.error;
      this.isLoading = false;
    }
  
  }


}
