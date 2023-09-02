
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CampModel } from 'src/app/admin/componant/add-camp/camp.model';
import { BookingService } from 'src/app/services/booking.service';
import { CampService } from 'src/app/services/camp.service';
import { BookingCampModel } from './BookingCamp.model';

@Component({
  selector: 'app-booking-screen',
  templateUrl: './booking-screen.component.html',
  styleUrls: ['./booking-screen.component.css']
})
export class BookingScreenComponent implements OnInit {
  camp: CampModel = new CampModel();
  bookingData: BookingCampModel = new BookingCampModel();
  totalBill:number=0;
  bookingForm!:FormGroup;

  minDate1:any=new Date();
  minDate2!:any;
  date1:any;
  date2:any;
  Days:any=0;
  refId!:number;
  constructor(private api: CampService,private router:Router,private bookApi:BookingService,private fb:FormBuilder) { }


  ngOnInit(): void {

    this.camp = this.api.getCampData()
    console.log(this.camp);
    this.refId=new Date().getTime();


    this.bookingForm = this.fb.group({
      billingAddress: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', [Validators.required]],
      zipCode: ['', [Validators.required,Validators.minLength(6)]],
      cellPhone:['',[Validators.required,Validators.minLength(5)]],
      checkinDate:['',Validators.required],
      checkoutDate:['',Validators.required]

    })

  }
  // get getControl(){
  //   return this.bookingForm.controls;
  // }
  setMinDate2(){
    this.minDate2=this.date1;
  }
  CalculateDays(){
      const date1Modified=new Date(this.date1);
      const date2Modified=new Date(this.date2);

      // find days
      const Time=date2Modified.getTime()-date1Modified.getTime();
      this.Days=(Time/(1000*3600*24))+1;
      this.totalBill=this.camp.rate*this.Days;

  }
  SubmitBookedCamp(){
    console.log(this.bookingForm.value);

    //assining formData to BookingObj which to be post
    this.bookingData.campId=this.camp.campId;
    this.bookingData.campName=this.camp.campName;
    this.bookingData.refId=this.refId;
    this.bookingData.totalBill=this.totalBill;
    this.bookingData.stayDays=this.Days;
    this.bookingData.billingAddress=this.bookingForm.value.billingAddress;
    this.bookingData.zipCode=this.bookingForm.value.zipCode;
    this.bookingData.state=this.bookingForm.value.state;
    this.bookingData.country=this.bookingForm.value.country;
    this.bookingData.checkinDate=this.bookingForm.value.checkinDate;
    this.bookingData.checkoutDate=this.bookingForm.value.checkoutDate;
    this.bookingData.cellPhone=this.bookingForm.value.cellPhone;


    this.camp.status='booked';
    console.log(this.camp);
    console.log(this.bookingData);

   //calling api services to update the camp which is booked
    this.api.updateCamp(this.camp,this.camp.campId).subscribe(res=>{


    },err=>{
      alert("something went wrong");
    }
    )
      //calling api services to post Booked Data
    this.bookApi.submitBookData(this.bookingData)
    .subscribe(res=>{
      console.log(res);
      this.bookingForm.reset();



    },eror=>{
        alert("something went wrong");
    }

    )


  }


}
