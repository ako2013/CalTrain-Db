import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

//LISTING ONLY

@Injectable()
export class PurchaseService {

  public purchaseList: Array<Purchase> = [];

  constructor(public http: Http) {

    var data: any = this.http.get('https://evening-reef-56543.herokuapp.com/api/all_purchases');
    data.subscribe(info =>{
      let response = JSON.parse(info._body);
      console.log(response);
      for(var item in response){
        var id = response[item].userId;
        var ticket = response[item].ticketId;
        var date = response[item].date;
        this.purchaseList.push(new Purchase(id,ticket,date));
      }
    });

   }

}

class Purchase{
  userId: String;
  ticketId: String;
  date: String;

  constructor(id,ticket,date){
    this.userId = id;
    this.ticketId = ticket;
    this.date = date;
  }
}
