import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EndsAtService {

  public endssAtList: Array<EndList> = [];

  constructor (public http: Http) {
    this.getEndsAt();
   }

  private async getEndsAt() {
    try {
      const data = await this.http.get('https://evening-reef-56543.herokuapp.com/api/all_ends_at').toPromise()
    .then(info => {
      const response = info.json();
      //console.log(response);
      for (let item in response) {
        if (item) {
          const route = response[item].route_id;
          const station = response[item].station_id;
          this.endssAtList.push(new EndList(route,station));
        }
      }
    });
    }catch (err) {
      console.log('Error: ' + err);
    }
  }
}

class EndList{
  route_id: String;
  station_id: String;

  constructor(route, station){
    this.route_id = route;
    this.station_id = station;
  }
}
