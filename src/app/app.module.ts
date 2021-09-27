import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserslistComponent } from './userslist/userslist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ModeratorComponent } from './moderator/moderator.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
// import { AlertComponent } from './_components/alert/alert.component';





@NgModule({
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  

  ],
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserslistComponent,
    HomeComponent,
    AdminComponent,
    ModeratorComponent,
    UserComponent,
    ProfileComponent,
    // AlertComponent,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
