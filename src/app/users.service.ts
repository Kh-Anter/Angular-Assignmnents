import { HttpClient } from '@angular/common/http';
import { IUser } from './IUser';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IPost } from './IPost';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 getUrl:string="https://dummyjson.com/users";
 postUrl:string="https://dummyjson.com/posts/add";
 commentsUrl:string="https://dummyjson.com/comments";
 registerUrl:string="http://localhost:3000/signUp";
 loginUrl:string="http://localhost:3000/login";
  constructor(private http:HttpClient) { }
  
  getUsers():Observable<IUser[]> {
    return this.http.get<IUser[]>(this.getUrl).pipe(catchError((err)=>{
      return throwError(()=>(err.message || "Internal Server error"))
    }))
  }
  
  addPost(posts:IPost){
   return this.http.post(this.postUrl,posts).pipe(catchError((error)=>{
      return throwError(()=>error.message || "Internal server error")
     }));
  }

  getComments():Observable<any> {
    return this.http.get<any>(this.commentsUrl).pipe(catchError((err)=>{
      return throwError(()=>(err.message || "Internal Server error"))
    }))
  }

  login(loginData:any):Observable<any>{
    return this.http.post(this.loginUrl,loginData).pipe(catchError((err)=>{
      return throwError(()=>(err.message || "Internal Server error"));
      }))
  }

  register(registData:any):Observable<any>{
   return this.http.post(this.registerUrl,registData).pipe(catchError((err)=>{
    return throwError(()=>(err.message || "Internal Server error"));
    }))
  }

}
