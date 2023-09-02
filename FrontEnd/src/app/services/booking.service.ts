import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }
  submitBookData(data:any){
    return this.http.post<any>("http://localhost:50475/Bookedcamp/add",data)

    .pipe(map((res:any)=>{

      return res;

    }))
  }
  deleteBookData(id:number){
    return this.http.delete<any>("http://localhost:50475/Bookedcamp/delete/"+id)

    .pipe(map((res:any)=>{

      return res;

    }))
  }
}
