import { Component, OnInit } from '@angular/core';;
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { MustMatch } from '../confirm-password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  exform!: FormGroup;
  submitted=false;
  userEmails: any;
  

  constructor(private formBuilder:FormBuilder){}

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
 
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  ngOnInit(){
    this.exform= this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      Othername: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phonenumber: ['', Validators.required,Validators.pattern("^(?:254|\\+254|0)?(7[0-6][0-9]{1,7})$")],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    },
      {
        validator: MustMatch('password', 'confirmPassword'),
      });
  }
  get primEmail(){
    return this.userEmails.get('primaryEmail')
    }
  
    get secondEmail(){
    return this.userEmails.get('secondaryEmail')
    }
    get f() { return this.exform.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.exform.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.exform.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.exform.reset();
    }
    

  
           



//       'firstname' : new FormControl(null, Validators.required ),
//       'lastname' : new FormControl(null, Validators.required ),
//       'othername' : new FormControl(''),
//       'email' : new FormControl(null, [Validators.required, Validators.email] ),
//       'password' : new FormControl( '', [Validators.required, Validators.minLength(6)]),
//       'confirmPassword': new FormControl( ['', Validators.required]),
//       'phonenumber' : new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),],)
   
//     });
//     {
//       validator: MustMatch('password', 'confirmPassword')}
//   }
//   clicksub(){
//     console.log(this.exform.value);
//     this.exform.reset();
//   }
  
// }
  };