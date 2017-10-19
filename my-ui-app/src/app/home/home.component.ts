import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isLoggedIn: boolean;
  public username: String;

  constructor(public authService: AuthenticationService) {
    this.isLoggedIn = false;
   }

  ngOnInit(){}

  ngDoCheck() {
    try{
      if(this.authService.userList[0].valid) 
      {
        this.isLoggedIn = true;
        this.username = this.authService.userList[0].username;
      }
    }catch(e){};
  }

}
