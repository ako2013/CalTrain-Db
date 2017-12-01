import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TrainService {

  public trainLists: Array<Train> = [];

  constructor(public http: Http) {
    this.trainLists.push(new Train());
    this.trainLists[0].trainName = "Red";
    this.trainLists[0].trainCap = 100;
    this.trainLists.push(new Train());
    this.trainLists[1].trainName = "Blue";
    this.trainLists[1].trainCap = 150;
    this.trainLists.push(new Train());
    this.trainLists[2].trainName = "Green";
    this.trainLists[2].trainCap = 200;
    this.trainLists.push(new Train());
    this.trainLists[3].trainName = "Yellow";
    this.trainLists[3].trainCap = 250;
   }

}

class Train{
  trainName: string;
  trainCap: number;

  contructor(name: string,cap: number){
    this.trainName = name;
    this.trainCap = cap;
  }
}