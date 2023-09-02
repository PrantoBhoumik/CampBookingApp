import { Component, OnInit } from '@angular/core';
import { CampService } from 'src/app/services/camp.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CampModel } from '../add-camp/camp.model';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  campData!: any;
  campForm!: FormGroup;
  CampModelObj:CampModel=new CampModel();
  constructor(private campSer: CampService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.campForm = this.formBuilder.group({
      campName: ['', [Validators.required]],
      capacity: ['', [Validators.required, Validators.maxLength(1)]],
      rate: ['', [Validators.required]],
      description: ['', [Validators.required]],
      url: ['', Validators.required]


    })

    this.campSer.getAllCamp().subscribe(
      data => {
        this.campData = data;
        console.log(data);
      }, error => {
        console.log(error);
      }

    );
  }
  getAllCampData() {
    this.campSer.getAllCamp().subscribe(
      data => {
        this.campData = data;
        console.log(data);
      }, error => {
        console.log(error);
      }

    );
  }
  deleteCampData(camp: any) {
    this.campSer.deleteCamp(camp.campId).subscribe(res => {
      alert("Camp Deleted Succesfully");
      this.getAllCampData();
    })
  }
  //Clicking edit button showing existing Data here
  onEdit(camp:any) {
    this.CampModelObj.campId=camp.campId;
    this.CampModelObj.status=camp.status;
    this.campForm.controls['campName'].setValue(camp.campName);
    this.campForm.controls['capacity'].setValue(camp.capacity);
    this.campForm.controls['rate'].setValue(camp.rate);
    this.campForm.controls['description'].setValue(camp.description);
    this.campForm.controls['url'].setValue(camp.url);

  }
  updateCampData(){
    //assigning the data to Model object which to be posted
    this.CampModelObj.campName=this.campForm.value.campName;
    this.CampModelObj.capacity=this.campForm.value.capacity;
    this.CampModelObj.description=this.campForm.value.description;
    this.CampModelObj.rate=this.campForm.value.rate;
    this.CampModelObj.url=this.campForm.value.url;

    //calling api to update the edited Data
    this.campSer.updateCamp(this.CampModelObj,this.CampModelObj.campId).subscribe(res=>{
      alert("Camp Updated Succesfully ");
      let ref=document.getElementById('cancel');
      ref?.click();
      this.campForm.reset();
      this.getAllCampData();
    },err=>{
      alert("something went wrong");
    }
    )

  }

}
