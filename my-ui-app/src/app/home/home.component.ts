import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { TrainService } from '../train.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isLoggedIn: boolean;
  public username: String;
  public trainName: String;
  public trainCap: number;
  public trainStatus: String;

  public myParams;
  public myStyle;

  //fake data for testing

  constructor(public authService: AuthenticationService, public trainService: TrainService) {
    this.isLoggedIn = this.authService.validated;
    this.trainStatus = "Working";
   }

  ngOnInit(){
  }

  ngDoCheck() {
    try{
      if(this.authService.userList[0].valid) 
      {
        this.authService.validated = true;
        this.username = this.authService.userList[0].username;
      }
    }catch(e){};
  }

  trainClicked(train){
    console.log("Train clicked: "+train.trainName);
    this.trainName = train.trainName;
    this.trainCap = train.trainCap;

  }

  logOut(){
    this.authService.validated = false;
    this.authService.userList = null;
  }

}
