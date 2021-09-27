import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myform!:FormGroup;
  submitted =  false;
  loading=false;
  returnUrl: string | undefined ;
  route: any;
  alertService: any;
  accountService: any;
 
  
constructor(private formBuilder:FormBuilder) { }


  ngOnInit(): void {
    this.myform = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}

// convenience getter for easy access to form fields
get f() { return this.myform.controls; }

onSubmit() {
  this.submitted = true;

  // reset alerts on submit
  this.alertService.clear();

  // stop here if form is invalid
  if (this.myform.invalid) {
      return;
  }

  this.loading = true;
  this.accountService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        (          _data: any) => {
              this.route.navigate([this.returnUrl]);
          },
        (          error: any) => {
              this.alertService.error(error);
              this.loading = false;
          });
}
}