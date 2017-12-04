import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {

  public userLists: Array<User> = [];

  constructor(public http: Http) { 

    var data: any = this.http.get('https://evening-reef-56543.herokuapp.com/api/all_user');
    data.subscribe(info =>{
      let response = JSON.parse(info._body);
      console.log(response);
      for(var item in response){
        var id = response[item].userId;
        var name = response[item].userName;
        var pass = response[item].userPass;
        this.userLists.push(new User(id,name,pass));
      }
    });

  }

  public addUser (userObject: any): number{
    let userId = userObject['userId'];
    let userName = userObject['userName'];
    let userPass = userObject['userPass'];

    var request: any = this.http.get('https://evening-reef-56543.herokuapp.com/api/user?code=1&id='+userId+'&userName='+userName+'&userPass='+userPass);
    request.subscribe((feedback) => {
      var response = JSON.parse(feedback._body);
      console.log(response.message);
      if(response.message == 1) return 1;
      return 0;
    });
    return 0;
  }

  public deleteUser (userObject: any): number{
    let userId = userObject['userId'];

    var request: any = this.http.get('https://evening-reef-56543.herokuapp.com/api/user?code=2&id='+userId);
    request.subscribe((feedback) => {
      var response = JSON.parse(feedback._body);
      console.log(response.message);
      if(response.message == 1) return 1;
      return 0;
    });
    return 0;
  }

  //change password
  public updateUser (userObject: any): number{
    let userId = userObject['userId'];
    let userPass = userObject['userPass'];

    var request: any = this.http.get('https://evening-reef-56543.herokuapp.com/api/user?code=3&id='+userId+'&userPass='+userPass);
    request.subscribe((feedback) => {
      var response = JSON.parse(feedback._body);
      console.log(response.message);
      if(response.message == 1) return 1;
      return 0;
    });
    return 0;
  }

}


class User{
  userId: String;
  userName: String;
  userPass: String

  constructor(id,name,pass){
    this.userId = id;
    this.userName = name;
    this.userPass = pass;
  }
}

