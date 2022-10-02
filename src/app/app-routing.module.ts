import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { RfRegisterComponent } from './rf-register/rf-register.component';
import { RfLoginComponent } from './rf-login/rf-login.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},{path:'products',component:ProductComponent},
  {path:'users',component:UsersComponent},{path:'posts',component:PostsComponent},
  {path:'comments/:id',component:CommentsComponent},
  {path:'productDetails/:productid',component:ProductDetailsComponent},
  {path:'login',component:LoginComponent},{path:'register',component:RegisterComponent},
  {path:'rf-login',component:RfLoginComponent},{path:'rf-register',component:RfRegisterComponent},
  {path:'notes',component:NotesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
