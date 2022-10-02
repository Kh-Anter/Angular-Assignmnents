import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-rf-login',
  templateUrl: './rf-login.component.html',
  styleUrls: ['./rf-login.component.scss']
})
export class RfLoginComponent implements OnInit {

  constructor(private fp:FormBuilder, private users:UsersService, private router:Router) { }

  ngOnInit(): void {
  }
registerationForm=this.fp.group({
  username:['',[Validators.required,Validators.pattern("^[a-zA-Z]*")]],
  password:['',Validators.required]
})

get userName()
  {
    return this.registerationForm.get('username')
  }

get password()
  {
    return this.registerationForm.get('password')
  }

  login(){
    return this.users.login({
      username:this.userName?.value,
      password:this.password?.value,
    }).subscribe(
     data=>{console.log("result of login",data)
        if(data.result=="wrong username or password"){
         alert("wrong username or password");
        }else{
         this.router.navigate(['home',{username:this.userName?.value}]);
        }
   },
     err=>{console.log("login error ",err)}
    );
 
   }


}
