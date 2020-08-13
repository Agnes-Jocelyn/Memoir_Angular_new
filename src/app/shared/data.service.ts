import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "https://api.riyofirsan.com"
  constructor(private http: HttpClient) { }

  async getPosts(token) {
    return new Promise((resolve, rejects) => {
      this.http.get(`${this.url}/post/show`, {headers: {token: token}
      }).subscribe(
        res => {
          console.log('DATA POSTS: ',res);
          return resolve(res)
        }
      )
    })
  }

  async getPost(token, id) {
    console.log('hereeeeeeeee');
    
    
    return new Promise((resolve, rejects) => {
      this.http.get(`${this.url}/post/show/${id}`, {headers: {token: token}
      }).subscribe(
        res => {
          console.log('DATA POSTS: ',res);
          return resolve(res)
        }
      )
    })
  }

  async createPost(token, data){
    const body = {description : data}
    console.log("data1",data);
    console.log("tokenn",token);
    
    return new Promise((resolve, reject) =>{
      this.http.post(`${this.url}/post/create`, body, {headers :{token : token}
    }).subscribe(
        res => {
          console.log("respon",res);
          return resolve(res);
        }
      )
    })
  }
}
