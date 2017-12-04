import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class RouteService {

  public routeList: Array<Route> = [];

  constructor(public http: Http) {

    var data: any = this.http.get('https://evening-reef-56543.herokuapp.com/api/all_route');
    data.subscribe(info =>{
      let response = JSON.parse(info._body);
      console.log(response);
      for(var item in response){
        var id = response[item].id;
        var dist = response[item].distance;
        var arr = response[item].arrival;
        var dept = response[item].dept;
        this.routeList.push(new Route(id,dist,arr,dept));
      }
    });

   }

   public addRoute(routeObj: any): number{

    let id = routeObj['id'];
    let dist = routeObj['distance'];
    let arr = routeObj['arrival'];
    let dept = routeObj['dept'];

    var request: any = this.http.get('https://evening-reef-56543.herokuapp.com/api/route?code=1&id='+id+'&dist='+dist+'&timeArr='+arr+'&timeDept='+dept);
    request.subscribe((feedback) => {
      var response = JSON.parse(feedback._body);
      console.log(response.message);
      if(response.message == 1) return 1;
      return 0;
    });
    return 0;
   }

   public deleteRoute(routeObj: any): number{

    let id = routeObj['id'];

    var request: any = this.http.get('https://evening-reef-56543.herokuapp.com/api/route?code=2&id='+id);
    request.subscribe((feedback) => {
      var response = JSON.parse(feedback._body);
      console.log(response.message);
      if(response.message == 1) return 1;
      return 0;
    });
    return 0;
   }

   public updateRoute(routeObj: any): number{

    let id = routeObj['id'];
    let dist = routeObj['distance'];
    let arr = routeObj['arrival'];
    let dept = routeObj['dept'];

    var request: any = this.http.get('https://evening-reef-56543.herokuapp.com/api/route?code=1&id='+id+'&dist='+dist+'&timeArr='+arr+'&timeDept='+dept);
    request.subscribe((feedback) => {
      var response = JSON.parse(feedback._body);
      console.log(response.message);
      if(response.message == 1) return 1;
      return 0;
    });
    return 0;
   }

}

class Route{
  id: String;
  distance: number;
  arrival: number;
  dept: number;

  constructor(id,dist,arr,dept){
    this.id = id;
    this.distance = dist;
    this.arrival = arr;
    this.dept = dept;
  }
}
