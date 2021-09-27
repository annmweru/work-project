import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserslistComponent } from './userslist/userslist.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { ModeratorComponent } from './moderator/moderator.component';
import { AdminComponent } from './admin/admin.component';



const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'login' },
// { path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
// { path: 'profile', component: ProfileComponent },
// { path: 'user', component: UserComponent },
// { path: 'moderator', component: ModeratorComponent },
// { path: 'admin', component: AdminComponent },
{ path: 'userslist', component: UserslistComponent },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
