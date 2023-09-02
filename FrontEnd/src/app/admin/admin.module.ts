import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './componant/admin-dashboard/admin-dashboard.component';
import { AddCampComponent } from './componant/add-camp/add-camp.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
   AdminComponent,
   AdminDashboardComponent,
   AddCampComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
