import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CampModel } from '../admin/componant/add-camp/camp.model';
@Injectable({
  providedIn: 'root'
})
export class CampService {
  campObj:CampModel=new CampModel();
  constructor( private http:HttpClient) { }
  getAllCamp(){
    return this.http.get<any>('http://localhost:50475/Camp')
  }
  postCamp(data:any){


    return this.http.post<any>('http://localhost:50475/Camp/add',data)

    .pipe(map((res:any)=>{

      return res;

    }))
  }
  FindCamp(CampId:number){
    return this.http.get<any>("http://localhost:50475/camp/find/"+CampId)
  }

  updateCamp(data:any,id:number){
    return this.http.put<any>("http://localhost:50475/Camp/update/"+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteCamp(id:number){
    return this.http.delete<any>("http://localhost:50475/Camp/delete/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  setCampData(obj:CampModel){
   this.campObj=obj;
  }
  getCampData(){
    return this.campObj;
  }

}
