import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TrainService {

  public trainLists: Array<Train> = [];

  constructor(public http: Http) {

    var data: any = this.http.get('https://evening-reef-56543.herokuapp.com/api/all_train');
    data.subscribe(info =>{
      let response = JSON.parse(info._body);
      console.log(response);
      for(var item in response){
        var id = response[item].id;
        var cap = response[item].capacity;
        var name = response[item].name;
        var stat = response[item].status;
        this.trainLists.push(new Train(name,cap,id,stat));
      }
    })
   }

   public addTrain(trainObject: any): number{

    let name = trainObject['trainName'];
    let cap = trainObject['trainCap'];
    let id = trainObject['trainId'];
    let status = 0;

    var request: any = this.http.get('https://evening-reef-56543.herokuapp.com/api/train?code=1&cap='+cap+'&name='+name+'&id='+id+'&status='+status);
    request.subscribe((feedback) => {
      var response = JSON.parse(feedback._body);
      console.log(response.message);
      if(response.message == 1) return 1;
      return 0;
    });
    return 0;
   }

   public deleteTrain(trainObject : any){

     let id = trainObject['trainId'];

     var request: any = this.http.get('https://evening-reef-56543.herokuapp.com/api/train?code=2&id='+id);
      request.subscribe((feedback) => {
        var response = JSON.parse(feedback._body);
        if(response.message == 1) return 1;
        return 0;
      });

   }

}

class Train{
  trainName: string;
  trainCap: number;
  trainId: string;
  trainStatus:  number;

  constructor(name: string,cap: number, id: string, stat: number){
    this.trainName = name;
    this.trainCap = cap;
    this.trainId = id;
    this.trainStatus = stat;
  }
}