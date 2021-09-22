import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{ map} from 'rxjs/operators'
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http : HttpClient) { }
  postUser(data:any){
    return this.http.post<any>("http://localhost:3000/",data)
    .pipe(map((res:any)=>{
      return res;
    }))

  }
  getUser(data:any){
    return this.http.get<any>("http://localhost:3000/")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

    updateUser(data:any,id:number){
      return this.http.put<any>("http://localhost:3000/"+identifierModuleUrl,data)
      .pipe(map((res:any)=>{
        return res;
      }));
}
}