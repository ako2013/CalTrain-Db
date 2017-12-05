import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

//LISTING ONLY 

@Injectable()
export class NextStationService {

  public nextStationList: Array<Station> = [];

  constructor(public http: Http) {

    var data: any = this.http.get('http://evening-reef-56543.herokuapp.com/api/all_next_station_of');
    data.subscribe(info =>{
      let response = JSON.parse(info._body);
      console.log(response);
      for(var item in response){
        var id = response[item].station_id;
        var next = response[item].next_station_id;
        this.nextStationList.push(new Station(id,next));
      }
    });

   }

}

class Station{
  id: String;
  next_station_id: String;

  constructor(id,next){
    this.id= id;
    this.next_station_id = next;
  }
}
