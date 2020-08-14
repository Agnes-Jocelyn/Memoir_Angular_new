import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../shared/data.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  yourPost;
  posts;
  name;
  @ViewChild("addPost") addPost: NgForm

  constructor(private dataService: DataService ) { }
 
  ngOnInit(): void {
    this.getPosts()
    this.name = localStorage.getItem('id')
  }
  async getPosts() {
    try {
      const token = localStorage.getItem('token')
      const res = await this.dataService.getPosts(token)
      console.log('DATAAA:: ',res);
      
      this.posts = res
    } 
    catch(err) {
      return err;
    }
  }

  async getYourPosts() {
    try {
      const token = localStorage.getItem('token')
      const id = localStorage.getItem('id')
      const res = await this.dataService.getPost(token, id)
      console.log('DATAAA:: ',res);
      
      this.yourPost = res
    } 
    catch(err) {
      return err;
    }
  }

  async createPost(){
    console.log(this.addPost.value.description);
    
  try{
    const token = localStorage.getItem('token')
    const res = await this.dataService.createPost(token, this.addPost.value.description)
    console.log("test",res);
    return res;
  }
  catch(err){
    return err;
  }
}

logout() {
  localStorage.clear()
}

}
