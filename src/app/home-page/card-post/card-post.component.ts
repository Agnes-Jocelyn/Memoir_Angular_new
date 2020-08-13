import { Component, OnInit, Input } from '@angular/core';
import {DataService} from '../../shared/data.service'

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent implements OnInit {

  posts
  constructor(private dataService: DataService ) { }

  ngOnInit(): void {
    this.getPosts() 
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

}
