import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersList: any;
  constructor(private users: UsersService) { }

  ngOnInit(): void {
    this.users.getUsers().subscribe(
      resultusers => {
        this.usersList = resultusers;
      }, err => {
        console.log(err)
      }
    )
  }

}
