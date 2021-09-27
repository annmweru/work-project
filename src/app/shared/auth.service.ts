import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
 

const AUTH_API = "  ";

const httpOptions ={
  headers:new HttpHeaders ({ 'Content-Type' : 'application/json'})
};


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  postUser: any; 
  this: any;


  constructor( private http : HttpClient) { }
  

  login(username: string,password:string) : Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }
  register(firstName: string ,lastName:string , otherName:string,email:string,phoneNumber:number, password:string) : Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      firstName,
      lastName,
      otherName,
      email,
      phoneNumber,
      password,
    }, httpOptions);
  }
}

//   })
//   postUser(data:any){
//     return this.http.post<any>("http://localhost:3000/",data)
//     .pipe(map((res:any)=>{
//       return res;
//     }))

//   }
//   getUser(data:any){
//     return this.http.get<any>("http://localhost:3000/")
//     .pipe(map((res:any)=>{
//       return res;
//     }))
//   }

//     updateUser(data:any,id:number){
//       return this.http.put<any>("http://localhost:3000/"+identifierModuleUrl,data)
//       .pipe(map((res:any)=>{
//         return res;
//       }));
// }
// }