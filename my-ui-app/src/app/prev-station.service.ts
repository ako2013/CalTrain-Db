import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

//LISTING ONLY 

@Injectable()
export class PrevStationService {

  public prevStationList: Array<Station> = [];

  constructor(public http: Http) {

    var data: any = this.http.get('http://evening-reef-56543.herokuapp.com/api/all_previous_station_of');
    data.subscribe(info =>{
      let response = JSON.parse(info._body);
      console.log(response);
      for(var item in response){
        var id = response[item].station_id;
        var next = response[item].previous_station_id;
        this.prevStationList.push(new Station(id,next));
      }
    });

   }

}

class Station{
  id: String;
  prev_station_id: String;

  constructor(id,next){
    this.id= id;
    this.prev_station_id = next;
  }
}
