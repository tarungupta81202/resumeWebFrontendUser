import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";
import { environmentProd } from "src/environments/environment.prod";
import Swal from "sweetalert2";
import { ToastrService } from "ngx-toastr";
import { jwtDecode } from "jwt-decode";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private loader_data = new BehaviorSubject<boolean>(false);
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  token: string = "";
  rootUrl: string = "";

  constructor(private http: HttpClient, private toastr: ToastrService, private router:Router) {
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

  updateAuthenticationStatus(isAuthenticated: boolean) {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }

  alertSuccess(title: string, message: string) {
    Swal.fire({
      title: title,
      text: message,
      imageUrl:
        "https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png",
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: "Custom Icon",
    });
  }

  alertError(title: string, message: string) {
    Swal.fire({
      title: title,
      text: message,
      icon: "error",
    });
  }

  decodeToken() {
    const decoded = jwtDecode(this.token);
    return decoded;
  }

  toastSuccess(message: string) {
    this.toastr.success("Hello, this is a success toast!", "Success");
  }

  toastError(message: string) {
    this.toastr.error(message, "Error");
  }

  storeSession(key: any, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getSession(key: any) {
    const value = sessionStorage.getItem(key);
    return value;
  }

  async autoLogin() {
    const savedToken = sessionStorage.getItem("token");
    console.log(savedToken);
    
    if (savedToken) {
      this.updateAuthenticationStatus(true);
      this.router.navigateByUrl("user");
    }
  }

  getMethod(api: any) {
    this.loading_start();
    const response = new Promise((resolve, reject) => {
      this.http
        .get(this.rootUrl + api)
        .toPromise()
        .then((response) => {
          this.loading_stop();
          resolve(response);
        })
        .catch((error) => {
          this.loading_stop();
          reject(error);
        });
    });
    return response;
  }

  async postMethod(api: any, data: any) {
    this.loading_start();
    const response = new Promise((resolve, reject) => {
      this.http
        .post(this.rootUrl + api, data)
        .toPromise()
        .then((response) => {
          this.loading_stop();
          resolve(response);
        })
        .catch((error) => {
          this.loading_stop();
          reject(error);
        });
    });
    return response;
  }
}
