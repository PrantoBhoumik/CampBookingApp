import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './componants/dashboard/dashboard.component';
import { BookingScreenComponent } from './componants/booking-screen/booking-screen.component';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';
import { ManageBookingComponent } from './componants/manage-booking/manage-booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';
import { SortPipe } from '../pipes/sort.pipe';
import { LoginComponent } from './componants/login/login.component';
import { SignupComponent } from './componants/signup/signup.component';



@NgModule({
  declarations: [
    DashboardComponent,
    BookingScreenComponent,

    PublicComponent,
    ManageBookingComponent,
    LoginComponent,
    SignupComponent,
    FilterPipe,
    SortPipe

  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
