import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {
   url='http://localhost:3000/enroll';
  constructor(private http: HttpClient) { }

  user(userData){
    return this.http.post<any>(this.url, userData);
  }
}
