import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PublicComponent } from './public/public.component';
import { AuthGuard } from './services/auth.guard';
import { NotFoundComponent } from './shared/componants/not-found/not-found.component';



const routes: Routes = [
  // Main routing and lazy loading implimented here
  {path:'',redirectTo:'/public/dashboard',pathMatch:'full'},
  {path:'admin',component:AdminComponent,loadChildren:()=>import('./admin/admin.module').then((x)=>x.AdminModule),canActivate:[AuthGuard]},
  {path:'public',component:PublicComponent,loadChildren:()=>import('./public/public.module').then((x)=>x.PublicModule)},
  {path:'**',component:NotFoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
