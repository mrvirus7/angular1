import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 url="http://localhost:8000/api/owners";
 project_url="http://localhost:8000/api/project";
 role_url="http://localhost:8000/api/roles";
  private http=inject(HttpClient);
  // constructor(protected http:HttpClient) { }

  getUser():Observable<any>{
    return this.http.get(this.url);
  }

  createAuth(row:any){
    return this.http.post(this.url,row)
  }

  deleteAuth(id:any){
    return this.http.delete(this.url+"/"+id);
  }

  getproject():Observable<any>{
    return this.http.get(this.project_url);
  }
  getrole():Observable<any>{
    return this.http.get(this.role_url);
  }

  getName():Observable<any>{
    return this.http.get(this.url);
  }
}
