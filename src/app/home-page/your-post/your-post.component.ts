import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-your-post',
  templateUrl: './your-post.component.html',
  styleUrls: ['./your-post.component.css']
})
export class YourPostComponent implements OnInit {

  yourPosts;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getYourPosts()
  }

  async getYourPosts() {
    try {
      const token = localStorage.getItem('token')
      const id = localStorage.getItem('id')
      console.log('TOKEN: ',token);
      console.log('id: ',id);
      
      const res = await this.dataService.getPost(token, id)
      console.log('DATAAA:: ',res);
      
      this.yourPosts = res
      console.log('YOURPOST: ',this.yourPosts);
      
    } 
    catch(err) {
      return err;
    }
  }


}
