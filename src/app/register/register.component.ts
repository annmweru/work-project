import { Component, OnInit } from '@angular/core';;
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { MustMatch } from '../confirm-password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  exform!: FormGroup;
  ngOnInit(){

    this.exform=new FormGroup({
      'firstname' : new FormControl(null, Validators.required ),
      'lastname' : new FormControl(null, Validators.required ),
      'othername' : new FormControl(''),
      'email' : new FormControl(null, [Validators.required, Validators.email] ),
      'password' : new FormControl( '', [Validators.required, Validators.minLength(6)]),
      'confirmPassword': new FormControl( ['', Validators.required]),
      'phonenumber' : new FormControl(null, [Validators.required, Validators.pattern('/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&)]',),],)

    });
    {
      validator: MustMatch('password', 'confirmPassword')}
  }
  clicksub(){
    console.log(this.exform.value);
    this.exform.reset();
  }

}

