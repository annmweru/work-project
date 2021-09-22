import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myform!:FormGroup;
constructor() { }


  ngOnInit(): void {
    this.myform=new FormGroup({
      username:new FormControl('',[Validators.required]),
      password :new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

}
