import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

//LISTING ONLY

@Injectable()
export class TicketService {

  public ticketLists:Array<Ticket> = [];

  constructor(public http: Http) {

    var data: any = this.http.get('https://evening-reef-56543.herokuapp.com/api/all_ticket');
    data.subscribe(info =>{
      let response = JSON.parse(info._body);
      console.log(response);
      for(var item in response){
        var id = response[item].id;
        var price = response[item].price;
        this.ticketLists.push(new Ticket(id,price));
      }
    });

   }
}

class Ticket{
  id: String;
  price: number;

  constructor(id,price){
    this.id = id;
    this.price = price;
  }
}
