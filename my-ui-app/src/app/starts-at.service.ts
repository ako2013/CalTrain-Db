import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class StartsAtService {

  public startsAtList: Array<StartList> = [];

  constructor(public http: Http) {

    var data: any = this.http.get('https://evening-reef-56543.herokuapp.com/api/all_starts_at');
    data.subscribe(info =>{
      let response = JSON.parse(info._body);
      console.log(response);
      for(var item in response){
        var route = response[item].route_id;
        var station = response[item].station_id;

        this.startsAtList.push(new StartList(route,station));
      }
    });

   }

}

class StartList{
  route_id: String;
  station_id: String;

  constructor(route, station){
    this.route_id = route;
    this.station_id = station;
  }
}
