import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { confPassValidator } from '../custom validators/confPassValidator';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-rf-register',
  templateUrl: './rf-register.component.html',
  styleUrls: ['./rf-register.component.scss']
})
export class RfRegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,private users:UsersService,private router:Router) {}
  ngOnInit(): void {
  }

  whereYouHearDropDown=["Facebook","Twitter","Google"];
  registerationForm=this.fb.group({
    username:['',[Validators.required,Validators.pattern('^[a-zA-Z]*')]],
    email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password:['',[Validators.required,Validators.minLength(6)]],
    confPassword:['',[Validators.required]],
    whereYouHearOptions:['',Validators.required]
  },{validator:[confPassValidator]});

  get userName()
  {
    return this.registerationForm.get('username')
  }
  get email()
  {
    return this.registerationForm.get('email')
  }
  get password()
  {
    return this.registerationForm.get('password')
  }
  get confPassword()
  {
    return this.registerationForm.get('confPassword')
  }
  get whereYouHearOptions()
  {
    return this.registerationForm.get('whereYouHearOptions')
  }

  SignUp(){
    return this.users.register({
      userName:this.userName?.value,
      email:this.email?.value,
      password:this.password?.value,
      confirmPass:this.confPassword?.value,
      whereYouHear:this.whereYouHearOptions?.value
    }).subscribe(
     data=>{console.log("the result:", data)
      if(data.result=="email already exist"){
        alert("Your email address already exist!");
      }else{
        this.router.navigate(['home',{username:this.userName?.value}]);
      }
    },
      err=>{console.log("error :",err)}
    )
    } 
  }


