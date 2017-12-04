import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

//ONLY LIST ALL METHOD 

@Injectable()
export class TravelsService {

  public travelsList: Array<Travels> = [];

  constructor(public http: Http) {

    var data: any = this.http.get('https://evening-reef-56543.herokuapp.com/api/all_travels');
    data.subscribe(info =>{
      let response = JSON.parse(info._body);
      console.log(response);
      for(var item in response){
        var train = response[item].trainId;
        var route = response[item].routeId;
        this.travelsList.push(new Travels(train,route));
      }
    });

   }

}

class Travels{

  trainId: String;
  routeId: String;

  constructor(train,route){
    this.trainId = train;
    this.routeId = route;
  }

}