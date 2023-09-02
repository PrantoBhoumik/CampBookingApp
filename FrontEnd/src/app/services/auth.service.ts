import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string="http://localhost:50475/user/"
  constructor(private http:HttpClient,private router:Router) { }
  signUp(userObj:any){
  return this.http.post<any>(`${this.baseUrl}register`,userObj)
  }
  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj)
  }
  IsLoggedIn(){
    return !! localStorage.getItem('token');
  }
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/'])
  }
}
