import { Injectable } from '@angular/core';
import { User } from './user.model'
import {Http} from "@angular/http"
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url = "https://api.riyofirsan.com"
  source;
  user;
  constructor(private http : Http) { }
  
  async createUser (userData){
    console.log('USER DATA: ',userData)

    const data = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      confirmPassword: userData.confirmPassword
    }

    console.log('DATA: ',data);
    
    this.http.post(`${this.url}/users/register`, userData).subscribe(
      res => { 
       return res;
       },
       error =>{
        return error;
       }
    )
  }

  async login (userData){
    console.log(typeof userData);
    return new Promise((resolve, rejects) => {
      this.http.post(`${this.url}/users/login`, userData).subscribe(
        res => {
         console.log('hereeeeeeee');
         this.source = res         
         this.user = JSON.parse(this.source._body)
        localStorage.setItem('token', this.user.token)
        localStorage.setItem('id', this.user.id)
         console.log('USER DATA::::',this.user);
         
         return resolve (this.user);
       },
       error =>{
         return rejects (error);
         
       }
     )
    })
    
    // let data = JSON.parse(userData)

    // console.log('4.USERDATA: ',data);

   
  }

}
