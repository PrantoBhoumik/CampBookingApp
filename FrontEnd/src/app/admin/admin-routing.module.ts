import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddCampComponent } from './componant/add-camp/add-camp.component';
import { AdminDashboardComponent } from './componant/admin-dashboard/admin-dashboard.component';


const routes: Routes = [
    {path:'',redirectTo:'admin-dashboard',pathMatch:'full'},
    {path:'admin-dashboard',component:AdminDashboardComponent},
    {path:'add',component:AddCampComponent}

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
