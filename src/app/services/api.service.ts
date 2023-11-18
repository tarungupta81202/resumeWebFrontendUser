import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getMethod(url:string,params:string){
    const response = new Promise((resolve, reject) => {
      this.http.get(url).toPromise().then(() => {
        
      })
    }) 
  }
}
