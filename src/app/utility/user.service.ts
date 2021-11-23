import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) {

   }
   getUsers():Observable<any[]>{
return this._http.get<any[]>("https://reqres.in/api/users");
   }
   
   addUser():Observable<any>{
     return this._http.post("https://reqres.in/api/users",
     {"name":"lina",
     "job":"useless"});
   }
}
