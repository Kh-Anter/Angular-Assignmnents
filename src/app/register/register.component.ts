import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  whereYouHearOptions:any=["Facebook","Twitter","Google"];
  registerModel:any={userName:"",email:"",password:"",confirmPass:"",whereYouHear:"Facebook"}
  
  constructor(private users:UsersService , private router:Router) { }

  ngOnInit(): void {
  }

  SignUp(){
  return this.users.register(this.registerModel).subscribe(
   data=>{console.log("the result:", data)
    if(data.result=="email already exist"){
      alert("Your email address already exist!");
    }else{
      this.router.navigate(['home',{username:this.registerModel.userName}]);
    }
  },
    err=>{console.log("error :",err)}
  )
  } 
}
