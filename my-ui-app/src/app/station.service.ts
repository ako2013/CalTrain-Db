import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { async } from 'q';


@Injectable()
export class StationService {

  public stationList: Array<Station> = [];
  public stationListTest: Array<Station> = [];
  public errorCode: String = '';

  constructor(public http: Http) {
    setTimeout( () => this.getStationData(), 5000);
   }

   private async getStationData() {
    await this.http.get('https://evening-reef-56543.herokuapp.com/api/all_station').toPromise()
    .then( data => {
      const response = data.json();
      for (const item in response) {
        if (item) {
          const id: Number = response[item].id;
          const name: String = response[item].name;
          this.stationList.push(new Station(id, name));
        }
      }
    })
    .catch( error => {
      this.errorCode = 'Error';
      console.log('error');
      console.log(error);
    });
   };

   public async addStation(stationObj: any){

    const name = stationObj['name'];
    const id = stationObj['id'];

    const request =
      await this.http.get('https://evening-reef-56543.herokuapp.com/api/station?code=1&id=' + id + '&name=' + name).toPromise()
    .then((feedback) => {
      const response = feedback.json();
      console.log(response.message);
      if (response.message == 1) return 1;
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
