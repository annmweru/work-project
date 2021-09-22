import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { UserListModels } from './userlist-models';


@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  formValue!  : FormGroup;

  UserModelobj:UserListModels=new UserListModels();

  constructor(private FormBuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.formValue=this.FormBuilder.group({
      firstName: [''],
      lastName: [''],
      otherName: [''],
      email: [''],
      phoneNumber: [''],

    
    
    })
  }

  postUserListDetails(){
    this.UserModelobj.firstName=this.formValue.value.firstName;
    this.UserModelobj.lastName=this.formValue.value.lastName;
    this.UserModelobj.otherName=this.formValue.value.otherName;
    this.UserModelobj.email=this.formValue.value.email;
    this.UserModelobj.phoneNumber=this.formValue.value.phoneNumber;

    this.api.postUser(this.UserModelobj)
      .subscribe(res=>{
        console.log(res);
        alert("User is added successfully")
      },
      err=>{
        alert("something is wrong")
      })

      }
  }

