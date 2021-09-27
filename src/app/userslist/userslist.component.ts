import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { ApiService } from '../shared/auth.service';
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
      first_name: [''],
      last_name: [''],
      other_name: [''],
      email: [''],
      password:[''],
      phone_number: [''],

    
    
    })
  }

  postUserListDetails(){
    this.UserModelobj.first_name=this.formValue.value.firstName;
    this.UserModelobj.last_name=this.formValue.value.lastName;
    this.UserModelobj.other_name=this.formValue.value.otherName;
    this.UserModelobj.email=this.formValue.value.email;
    this.UserModelobj.password=this.formValue.value.password;
    this.UserModelobj.phone_number=this.formValue.value.phoneNumber;
     this.api.

    this.api.postUser(this.UserModelobj)
      .subscribe((res: any)=>{
        console.log(res);
        alert("User is added successfully")
      },
        (      _err: any)=>{
        alert("Something is wrong")
      })

      }
  }

