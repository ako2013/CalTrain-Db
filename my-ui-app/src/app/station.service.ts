import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class StationService {

  public stationList: Array<Station> = [];

  constructor(public http: Http) {

    var data: any = this.http.get('https://evening-reef-56543.herokuapp.com/api/all_station');
    data.subscribe(info =>{
      let response = JSON.parse(info._body);
      console.log(response);
      for(var item in response){
        var id = response[item].id;
        var name = response[item].name;
        this.stationList.push(new Station(id,name));
      }
    });

   }

   public addStation(stationObj: any){

    let name = stationObj['name'];
    let id = stationObj['id'];

    var request: any = this.http.get('https://evening-reef-56543.herokuapp.com/api/station?code=1&id='+id+'&name='+name);
    request.subscribe((feedback) => {
      var response = JSON.parse(feedback._body);
      console.log(response.message);
      if(response.message == 1) return 1;
      return 0;
    });
    return 0;
   }

   public deleteStaion(stationObj: any){
     let id = stationObj['id'];

    var request: any = this.http.get('https://evening-reef-56543.herokuapp.com/api/station?code=2&id='+id);
    request.subscribe((feedback) => {
      var response = JSON.parse(feedback._body);
      console.log(response.message);
      if(response.message == 1) return 1;
      return 0;
    });
    return 0;
   }

   public updateStation(stationObj: any){

    let name = stationObj['name'];
    let id = stationObj['id'];

    var request: any = this.http.get('https://evening-reef-56543.herokuapp.com/api/station?code=3&id='+id+'&name='+name);
    request.subscribe((feedback) => {
      var response = JSON.parse(feedback._body);
      console.log(response.message);
      if(response.message == 1) return 1;
      return 0;
    });
    return 0;
   }

}

class Station{
  id: String;
  name: String;

  constructor(id,name){
    this.id = id;
    this.name = name
  }
}
