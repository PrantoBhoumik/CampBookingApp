import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';
import { CampService } from 'src/app/services/camp.service';


@Component({
  selector: 'app-manage-booking',
  templateUrl: './manage-booking.component.html',
  styleUrls: ['./manage-booking.component.css']
})
export class ManageBookingComponent implements OnInit {
  searchForm!: FormGroup;
  bookedData!: any;
  BookedId!: number;
  camp!: any;
  temp: boolean = true;
  constructor(private fb: FormBuilder, private router: Router, private api: BookingService, private CampApi: CampService, private http: HttpClient) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      // // refId: ['', [Validators.required]],
      // cellPhone: ['', [Validators.required, Validators.minLength(10)]]
      refId:new FormControl("", [Validators.required]),
      cellPhone:new FormControl("", [Validators.required,Validators.minLength(10)]),


    })
  }
  //reseting this form on close button
  resetForm() {
    this.bookedData = '';
    this.temp = true;
    this.searchForm.reset();
  }
  //searching booking status
  onSearch() {

    console.log(this.searchForm.value);
    this.http.get<any>("http://localhost:50475/Bookedcamp").subscribe(res => {
      const user = res.find((a: any) => {
        return a.refId === this.searchForm.value.refId && a.cellPhone === this.searchForm.value.cellPhone
      });
      console.warn(user);
      if (user) {
        this.temp = false;
        // this.api.setData(user);
        this.bookedData = user;
        this.BookedId = this.bookedData.id;
        alert("Record found");
      } else {
        this.temp = true;

        alert("Record not found");
      }
    }, err => {
      alert("something went wrong!!");
    }
    )

  }
  cancelBooking() {
    this.CampApi.FindCamp(this.bookedData.campId).subscribe((res => {

      this.camp = res;
    }))

    this.camp.status = 'avilable';
    this.CampApi.updateCamp(this.camp, this.camp.campId).subscribe(res => {
      alert("Booking Canceled Succesfully ");

    }, err => {
      alert("something went wrong 1");
    }
    );
    this.api.deleteBookData(this.BookedId).subscribe(res => {
    }, err => {
      alert("something went wrong 2");
    }
    );
    this.bookedData = '';

  }

}
