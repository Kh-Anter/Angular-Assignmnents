import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
postId:any;
comment:any;
  constructor(private activeRoute:ActivatedRoute,private route:Router, private users:UsersService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params:ParamMap)=>{this.postId=params.get("id")});
    this.users.getComments().subscribe(
      com => {
        this.comment = com;
     //   console.log("======"+com)
      }, err => {
        console.log(err)
      }
    )
  }
  BackToPost(){
this.route.navigate(["posts",{id:this.postId}]);
  }

}
