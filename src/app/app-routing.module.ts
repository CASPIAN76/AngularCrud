import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'',redirectTo:'userlist' , pathMatch:'full'},
  {path:'userlist', component:UserListComponent},
  {path:'addUser', component:AddUserComponent},
  {path:'updateUser/:id', component:AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
