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
    this.getStationData();
  }

  private async getStationData() {
    try {
      await this.http.get('https://evening-reef-56543.herokuapp.com/api/all_station')
      .toPromise()
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
    }catch (err) {
      this.errorCode = err.status;

        console.log(new Error(err.status));
      }
  }

  public async addStation(stationObj: any) {

    const name = stationObj['name'];
    const id = stationObj['id'];
    try {
      const request =
      await this.http.get('https://evening-reef-56543.herokuapp.com/api/station?code=1&id=' + id + '&name=' + name)
      .toPromise()
      .then((feedback) => {
        const response = feedback.json();
        //console.log(response.message);
        if (response.message == 1) return 1;
        return 0;
    });
    }catch (err) {
      console.log('Error');
      return 0;
    }
  }

  public async deleteStaion(stationObj: any){
    const id = stationObj['id'];
    try {
      const request =
      await this.http.get('https://evening-reef-56543.herokuapp.com/api/station?code=2&id='+id)
      .toPromise()
      .then((feedback) => {
        const response = feedback.json();
        //console.log(response.message);
        if(response.message == 1) return 1;
        return 0;
      });
    }catch (err) {
      console.log('error: ' + err);
      return 0;
    }
  }

  public async updateStation(stationObj: any){

    const name = stationObj['name'];
    const id = stationObj['id'];
    try {
      const request = 
      await this.http.get('https://evening-reef-56543.herokuapp.com/api/station?code=3&id='+id+'&name='+name)
      .toPromise()
      .then((feedback) => {
        const response = feedback.json();
        //console.log(response.message);
        if(response.message == 1) return 1;
        return 0;
      });
    } catch (err) {
      console.log('Error: ' + err);
    }
    
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
