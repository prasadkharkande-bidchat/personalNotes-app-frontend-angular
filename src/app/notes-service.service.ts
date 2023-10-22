import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {baseUrl} from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  
  addData(data: any):Observable<any>{
    console.log("Adding data to db via FE")
    return this.http.post(`${baseUrl}/notes/newNote`, data)
  }

  getAllNotes(data: any):Observable<any>{
    console.log("Getting exisiting data from db ")
    return this.http.get(`${baseUrl}/getNotes`, data)
  }
}
