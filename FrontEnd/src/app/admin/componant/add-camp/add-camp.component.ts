import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { CampService } from 'src/app/services/camp.service';
import { CampModel } from './camp.model';

@Component({
  selector: 'app-add-camp',
  templateUrl: './add-camp.component.html',
  styleUrls: ['./add-camp.component.css']
})
export class AddCampComponent implements OnInit {

  campForm!:FormGroup;
  CampModelObj:CampModel=new CampModel();
  constructor(private formBuilder : FormBuilder,private CampApi: CampService) { }

  ngOnInit(): void {
    this.campForm=this.formBuilder.group({
      campName:['',[Validators.required]],
      capacity:['',[Validators.required,Validators.maxLength(1)]],
      rate:['',[Validators.required]],
      description:['',[Validators.required]],
      url:['',Validators.required]

     })
  }

  AddCamp(){
    this.CampModelObj.campName=this.campForm.value.campName;
    this.CampModelObj.capacity=this.campForm.value.capacity;
    this.CampModelObj.description=this.campForm.value.description;
    this.CampModelObj.rate=this.campForm.value.rate;
    this.CampModelObj.url=this.campForm.value.url;
    this.CampModelObj.status="avilable";
    console.log(this.campForm);
    //calling the api service to post camp data
    this.CampApi.postCamp(this.CampModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Camp Added Successfully")
      let ref =document.getElementById('cancel')
      ref?.click();
      this.campForm.reset();

    },eror=>{
        alert("something went wrong");
    }

    )
  }

}
