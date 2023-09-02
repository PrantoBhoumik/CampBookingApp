import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingScreenComponent } from './componants/booking-screen/booking-screen.component';
import { DashboardComponent } from './componants/dashboard/dashboard.component';
import { LoginComponent } from './componants/login/login.component';
import { ManageBookingComponent } from './componants/manage-booking/manage-booking.component';
import { SignupComponent } from './componants/signup/signup.component';



const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'booking/:id',component:BookingScreenComponent},
  {path:'manage-booking',component:ManageBookingComponent},
  {path:'login',component:LoginComponent },
  {path:'signup',component:SignupComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
