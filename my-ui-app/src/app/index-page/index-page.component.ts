import { Component, OnInit } from '@angular/core';

import {StationService} from '../station.service';
import {RouteService} from '../route.service';
import { NextStationService } from '../next-station.service';
import { PrevStationService } from '../prev-station.service';
import { StartsAtService} from '../starts-at.service';
import { EndsAtService} from '../ends-at.service';
import {TicketService} from '../ticket.service';

import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {

  public optionSelected;
  public buttonColor = ["btn btn-light btn-lg","btn btn-light btn-lg","btn btn-light btn-lg"];

  public form: FormGroup;
  public departStation;
  public arrStation;
  public travellerName;
  public itemNo: number;
  public isConfirm: boolean;
  public isSuccess: boolean;

  public form2: FormGroup;
  public ticketIdFind;


  public selectedStationStart;
  public selectedStationEnd;
  public selectedName;
  public dist;
  public timeDept;
  public timeArr;
  public price;
  public purchasedTicketId;
  
  public ticketFound;

  public tempoTicket: any;

  constructor(public stationService: StationService, 
              public routeService: RouteService,
              public nextStationService: NextStationService,
              public prevStationService: PrevStationService,
              public fb: FormBuilder,
              public startsAtService: StartsAtService,
              public endsAtService: EndsAtService,
              public ticketService: TicketService,
              ) 
  {

    this.optionSelected = 0;
    this.isConfirm = false;
    this.isSuccess = false;

    this.form = this.fb.group({
      departStation: ['', Validators.compose([Validators.required])],
      arrStation: ['', Validators.compose([Validators.required])],
      travellerName: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(10),])],
    });

    this.form2 = this.fb.group({
      ticketIdFind: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(4),Validators.pattern('[0-9]*')])],
    });

  }

  ngOnInit() {
    //console.log(this.buttonColor);
   
  }

  connectedStation(stationObj :any){
    let str: String= '';
    //console.log(stationObj);
    let temp1 = this.nextStationService.nextStationList.filter(x => x.id == stationObj.id)[0].next_station_id;
    let temp2 = this.prevStationService.prevStationList.filter(x => x.id == stationObj.id)[0].prev_station_id;
    let name1 = this.stationService.stationList.filter(x => x.id == temp1)[0].name;
    let name2 = this.stationService.stationList.filter(x => x.id == temp2)[0].name;

    //console.log(this.nextStationService.nextStationList);
    return str+" "+name1+", "+name2;
    
  }

  clickedBuyTicket(){
    this.optionSelected = 1;
    this.buttonColor[0] = "btn btn-dark btn-lg";
    this.buttonColor[1] = "btn btn-light btn-lg", this.buttonColor[2] = "btn btn-light btn-lg";
    console.log(this.stationService.stationList.filter(x => x.name == "Station A")[0].id);
    //console.log(this.stationService.stationList.filter(x => x.name == "Station B")[0].id);
    console.log(this.startsAtService.startsAtList);
    //console.log(this.endsAtService.endssAtList);
    //console.log(this.stationService.stationList);
  }

  clickedCheckTicket() {
    this.optionSelected = 2;
    this.buttonColor[1] = "btn btn-dark btn-lg";
    this.buttonColor[0] =  "btn btn-light btn-lg"; this.buttonColor[2] = "btn btn-light btn-lg";
    this.isConfirm = false;
  }

  clickedFindStation() {
    this.optionSelected = 3;
    this.buttonColor[2] = "btn btn-dark btn-lg";
    this.buttonColor[0] = "btn btn-light btn-lg"; this.buttonColor[1] = "btn btn-light btn-lg";
    this.isConfirm = false;
  }

  clickedBackConfirm(){
    this.isConfirm = false;
  }

  clickedConfirmPurchase(){
    let latestId = this.ticketService.ticketList[this.ticketService.ticketList.length-1].id;
    let temp = parseInt(latestId.substr(7,latestId.length-1));
    temp = temp + 1;
    this.purchasedTicketId = "Ticket-00" + temp.toString();
    //console.log(temp2);
    this.ticketService.addTicket(this.purchasedTicketId,this.price);
    this.isSuccess = true;
    this.isConfirm = false;
  }

  public onSubmit(object: any){
    console.log(object);

    //let start = this.stationService.stationList.filter(x => x.name == object.departStation)[0].id;
    //let end = this.stationService.stationList.filter(x => x.name == object.arrStation)[0].id;

    this.isConfirm = true;
    this.isSuccess = false;
    this.selectedStationStart = object['departStation'];
    this.selectedStationEnd = object['arrStation'];
    this.selectedName = object['travellerName'];

    let rand = Math.floor((Math.random()*15) +1)
    let temp = "R-"+rand;
    let obj = this.routeService.routeList.filter(x => x.id == temp);

    this.dist = obj[0].distance;
    this.timeDept = obj[0].dept;
    this.timeArr = obj[0].arrival;
    this.price = Math.floor((Math.random()*10) +1);
    console.log(temp);
    
  }

  public onSubmit2(object: any){
    //console.log(object.ticketIdFind);
    let id = "Ticket-" + object.ticketIdFind;
    let result = this.ticketService.findTicket(id);
    if(result != undefined) this.ticketFound = result;
    else this.ticketFound = 0;
  }

  public splitTime(time: any){
    if(time.length == 3) return time.toString().replace(/\B(?=(\w{1})+(?!\d))/g, ":");
    return time.toString().replace(/\B(?=(\w{2})+(?!\d))/g, ":")
  }

}

class tempoTicket{

}
