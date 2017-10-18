import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private form: FormGroup;
  private username;
  private password; 

  constructor(public fb: FormBuilder) {

      this.form = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(50)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(50)])],
    });

   }

   private onSubmit(user: any): void {
     console.log("User data: ");
     user['userName'] =  this.username;
     user['userPass'] = this.password;
     console.log(user);
   }

  ngOnInit() {
  }

}
