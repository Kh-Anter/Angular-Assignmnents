import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  itemImageUrl:String ="./assets/img.jpg";
  constructor(private router:Router) { }

  ngOnInit(): void {
   
  }

}
