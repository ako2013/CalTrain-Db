import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { AuthenticationService } from '../authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public username;
  public password; 
  public mess;

  authService: any;

  constructor(public fb: FormBuilder, authService: AuthenticationService) {

      this.authService = authService;

      this.form = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(50)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(50)])],
    });

   }

   public onSubmit(user: any): void {
     //console.log("User data: ");
     user['userName'] =  this.username;
     user['userPass'] = this.password;
     //console.log(user);
     this.authService.validateUser(user);
     setTimeout(()=>{
       try {
        if(this.authService.userList[0].valid){
          this.mess = "Login successful";
        } else {
          this.mess = "Login failed";
          this.form.reset();
        }
       }catch(e){};
    },1000);
   }

  ngOnInit() {
  }

}
