import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginuserComponent} from './loginuser/loginuser.component';
import {UserComponent} from'./user/user.component';



const routes: Routes = [
  {path: 'Login', component:LoginuserComponent},
  {path: 'user', component:UserComponent}, 
  //COMENT: para cuando agregue la componente usuario
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
