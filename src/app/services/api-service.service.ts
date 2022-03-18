import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  headers = new HttpHeaders({ 
    'accept': 'application/json', 
  })
  

  constructor(private http:HttpClient) { } 

  getBook():Observable<any[]> {
    return this.http.get<any[]>('https://bookcart.azurewebsites.net/api/Book/user',{headers:this.headers}); 
  }
 getCategory(){
   return this.http.get<any[]>('https://bookcart.azurewebsites.net/api/Book/GetCategoriesList');
 }
 postBook(){
   return this.http.post<any[]>('https://bookcart.azurewebsites.net/api/Book',[]);
 }
}
