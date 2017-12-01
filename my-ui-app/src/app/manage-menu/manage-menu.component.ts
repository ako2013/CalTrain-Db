import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { TrainService } from '../train.service';


@Component({
  selector: 'app-manage-menu',
  templateUrl: './manage-menu.component.html',
  styleUrls: ['./manage-menu.component.css']
})
export class ManageMenuComponent implements OnInit {

  public trainLists: Array<Train> = [];

  //form setup
  public form: FormGroup;
  public editName;
  public editCap;
  public trainSelected: any;
  public itemNo: number;
  public modalName: String;
  public modalBody: String;


  constructor(public fb: FormBuilder, public trainService: TrainService) {
    this.form = this.fb.group({
      editName: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(50)])],
      editCap: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
    });

    this.itemNo = 1;
   }

  ngOnInit() { 
  }

  public onClicked(data){
    this.trainSelected = data;
    this.form.get("editName").setValue(data.trainName);
    this.form.get("editCap").setValue(data.trainCap);
    console.log(data);
  }

  public onClickedDel(data: any){
    this.trainSelected = data;
    this.modalName = "Please confirm deleting";
    this.modalBody = "Are you sure to delete train: "+data.trainName+" ?";
  }

  public confirmDeleteTrain(){
    console.log("Deleted :"+ JSON.stringify(this.trainSelected));
    this.modalName = "Deleting...";
    this.modalBody = "Success!!";
    setTimeout( location.reload(), 1000);
  }

  public onClickedItem(num: number){
    this.itemNo = num;
  }

  public onSubmit(object: any){
    console.log(object);
  }

}

class Train{
  trainName: string;
  trainCap: number;

  contructor(name: string,cap: number){
    this.trainName = name;
    this.trainCap = cap;
  }


}
