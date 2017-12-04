import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

//LISTING ONLY 

@Injectable()
export class PrevStationService {

  public prevStaionList: Array<Station> = [];

  constructor(public http: Http) {

    var data: any = this.http.get('http://evening-reef-56543.herokuapp.com/api/all_previous_station_of');
    data.subscribe(info =>{
      let response = JSON.parse(info._body);
      console.log(response);
      for(var item in response){
        var id = response[item].stationId;
        var next = response[item].prev_staion_id;
        this.prevStaionList.push(new Station(id,next));
      }
    });

   }

}

class Station{
  stationId: String;
  prev_station_id: String;

  constructor(station,next){
    this.stationId= station;
    this.prev_station_id = next;
  }
}
