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

  //form edit setup
  public form: FormGroup;
  public editName;
  public editCap;
  public trainSelected: any;
  public itemNo: number;
  public modalName: String;
  public modalBody: String;

  //form add setup
  public form2: FormGroup;
  public trainName;
  public trainCap;
  public trainId;

  public isEdit;
  public isAdd;

  constructor(public fb: FormBuilder, public trainService: TrainService) {
    this.form = this.fb.group({
      editName: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(50)])],
      editCap: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
    });

    this.form2 = this.fb.group({
      trainName: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(50)])],
      trainCap: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      trainId: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
    });

    this.itemNo = 1;
    this.isEdit = false;
    this.isAdd = false;
   }

  ngOnInit() { 
  }

  //edit data not finished
  public onClicked(data){
    this.trainSelected = data;
    this.isEdit = true;
    this.isAdd = false;
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
    this.trainService.deleteTrain(this.trainSelected);
    console.log("Deleted :"+ JSON.stringify(this.trainSelected));
    this.modalName = "Deleting...";
    this.modalBody = "Success!!";
    setTimeout( location.reload(), 1000);
  }

  public onClickedItem(num: number){
    this.itemNo = num;
  }

  public onClickedAdd(){
    this.isEdit = false;
    this.isAdd = true;
  }

  //part of edit not finished
  public onSubmit(object: any){
    console.log(object);
  }

  //submit for add
  public onSubmit2(object: any){
    console.log(object);
    this.trainService.addTrain(object);
    location.reload();
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
