import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginModel={username:"",password:""};
  constructor(private users:UsersService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
   return this.users.login(this.loginModel).subscribe(
    data=>{console.log("result of login",data)
       if(data.result=="wrong username or password"){
        alert("wrong username or password");
       }else{
        this.router.navigate(['home',{username:this.loginModel.username}]);
       }
  },
    err=>{console.log("login error ",err)}
   );

  }


}
