import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";
import { environmentProd } from "src/environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private loader_data = new BehaviorSubject<boolean>(false);
  rootUrl: string = "";

  constructor(private http: HttpClient) {
    if (environment.production === false) {
      this.rootUrl = "http://localhost:8000/api/v1/";
    } else if (environmentProd.production === true) {
      this.rootUrl = "https://www.bestbabycontestofficial.com/api/";
    }
  }

  async loading_start() {
    this.loader_data.next(true);
  }

  async loading_stop() {
    this.loader_data.next(false);
  }

  get_loader_Data() {
    return this.loader_data.asObservable();
  }

  getMethod(api: any) {
    const response = new Promise((resolve, reject) => {
      this.http
        .get(this.rootUrl + api)
        .toPromise()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
    return response;
  }

  async postMethod(api: any, data: any) {
    const response = new Promise((resolve, reject) => {
      this.http
        .post(this.rootUrl + api, data)
        .toPromise()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
    return response;
  }
}
