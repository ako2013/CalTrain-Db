import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthenticationService {

  public user: any;
  public validated: any;
  public userList: Array<User> = [];

  constructor(public http: Http) {
      this.validated = false;
   }

   private validateUser(userObject: any){

    let userName: String = userObject['userName'];
    let userPass: String = userObject['userPass']; 
    this.userList = [];

    //console.log(userName);
    //console.log(userPass);
    
     var request: any = this.http.get('https://vast-mesa-82240.herokuapp.com/api/user_validation?userName='+userName+'&userPass='+userPass);
     request.subscribe((feedback) => {
        var response = JSON.parse(feedback._body);
        //console.log(response.message);
        if(response.message == 1){
          this.userList.push(new User(userName,true));
        }else this.userList.push(new User(userName, false));
     },
     error => {console.log("Error"+error)});
   }

}

class User{
  username: String;
  valid: Boolean;

  constructor(name,valid){
    this.username = name;
    this.valid = valid;
  }
}
