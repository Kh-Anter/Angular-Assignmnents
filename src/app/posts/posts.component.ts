import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../users.service';
import { IPost } from '../IPost';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
postsList:any=[{title:"happy new year", postId:19},{title:"iti itake 42 graduated !", postId:27},{title:"the weather today 40c", postId:100}]
  constructor(private users:UsersService, private activeRoute:ActivatedRoute, private route:Router) { }
selectedPost:any;

  ngOnInit(): void {
    this.users.addPost(this.postsList);
    this.activeRoute.paramMap.subscribe((param:ParamMap)=>{
      this.selectedPost=param.get("id")
    })
  }

  addPost()
  {
    return this.users.addPost(this.postsList)
    .subscribe(
      data=>
      {
        console.log(data);
       // this.postsList="";
      },
      error=>
      {
        console.log(error);
      }
    );
    

  }

  goToCommentPage(postId:any){
    console.log(postId);
    this.route.navigate(["comments",postId])
  }

}

