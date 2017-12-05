import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

//LISTING ONLY

@Injectable()
export class TicketService {

  public ticketList:Array<Ticket> = [];

  constructor(public http: Http) {

    var data: any = this.http.get('https://evening-reef-56543.herokuapp.com/api/all_ticket');
    data.subscribe(info =>{
      let response = JSON.parse(info._body);
      console.log(response);
      for(var item in response){
        var id = response[item].id;
        var price = response[item].price;
        this.ticketList.push(new Ticket(id,price));
      }
    });
   }

   public addTicket(id: any, price: any){

    var request: any = this.http.get('https://evening-reef-56543.herokuapp.com/api/ticket?code=1&id='+id+'&price='+price);
    request.subscribe((feedback) => {
      var response = JSON.parse(feedback._body);
      console.log(response.message);
      if(response.message == 1) return 1;
      return 0;
    });
    return 0;
   }

   public findTicket(id: any): Ticket{
     return this.ticketList.filter(x => x.id == id)[0];    
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
