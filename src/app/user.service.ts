import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { identifierModuleUrl } from '@angular/compiler';

const API_URL =' http://localhost:8080/api';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor( private http:HttpClient) { }


  postUser(data:any){
    return this.http.post<any>(API_URL,data)
    .pipe(map((res:any)=>{
      return res;
    }))

  }
  getUser(data:any){
    return this.http.get<any>(API_URL)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

    updateUser(data:any,id:number){
      return this.http.put<any>(API_URL+identifierModuleUrl,data)
      .pipe(map((res:any)=>{
        return res;
      }));
}
getPublicContent():Observable<any> {
    return this.http.get(API_URL + 'all', {responseType: 'text'});

  }

  

  getUserBoard():Observable<any> {
    return this.http.get(API_URL + 'user', {responseType: 'text'});
}
getModeratorBoard(): Observable<any> {
  return this.http.get(API_URL + 'mod', {responseType: 'text'});
  
}
getAdminBoard(): Observable<any> {
  return this.http.get(API_URL + 'admin', {responseType: 'text'});
  
}

}
function getPublicContent() {
  throw new Error('Function not implemented.');
}

function getAdminBoard() {
  throw new Error('Function not implemented.');
}

function getModeratorBoard() {
  throw new Error('Function not implemented.');
}

function getUserBoard() {
  throw new Error('Function not implemented.');
}

