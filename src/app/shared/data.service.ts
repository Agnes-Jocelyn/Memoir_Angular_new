import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url = 'https://api.riyofirsan.com';
  constructor(private http: HttpClient) {}

  async getPosts(token) {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${this.url}/post/show`, { headers: { token: token } })
        .subscribe(
          (res) => {
            return resolve(res);
          },
          
        );
    });
  }

  async getPost(token, id) {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${this.url}/post/show/${id}`, { headers: { token: token } })
        .subscribe(
          (res) => {
            return resolve(res);
          },
          
        );
    });
  }

  async createPost(token, data) {
    const body = { description: data };

    return new Promise((resolve, reject) => {
      this.http
        .post(`${this.url}/post/create`, body, { headers: { token: token } })
        .subscribe(
          (res) => {
            return resolve(res);
          },
          
        );
    });
  }
}