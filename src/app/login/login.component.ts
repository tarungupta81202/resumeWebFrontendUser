import { Component, OnInit } from "@angular/core";
import { FormsService } from "../services/forms.service";
import { Route, Router } from "@angular/router";
import { ApiService } from "../services/api.service";
import { GlobalService } from "../services/global.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(
    public formService: FormsService,
    private router: Router,
    public apiService: ApiService,
    public globalService:GlobalService
  ) {}

  ngOnInit(): void {
    this.formService.initializeForm();
    this.formService.loginForm
      .get("email")
      ?.setValue("tg.whiteforce@gmail.com");
    this.formService.loginForm.get("password")?.setValue("12345678");
  }

  async loginSubmit() {
    if (this.formService.loginForm.get("email")?.valid) {
      this.apiService
        .postMethod("users/login", this.formService.loginForm.value)
        .then((response: any) => {
          if (
            response["statusCode"] === 200 &&
            response?.["success"] === true &&
            response?.["data"]
          ) {
            if (response?.["data"]?.["token"]) {
              this.apiService.token = response?.["data"]?.["token"];
              const decodeDetails = this.apiService.decodeToken();
              this.globalService.userDetails = decodeDetails;
              this.apiService.storeSession("token", this.apiService.token);
              this.apiService.storeSession("userDetails", decodeDetails);
              this.apiService.isAdminStatus(this.globalService.userDetails?.["is_superuser"])
              this.apiService.updateAuthenticationStatus(true);
              this.router.navigateByUrl("dashboard/resumes");
              this.apiService.toastSuccess(response?.["message"]);
            }
          } else {
            if (
              response["statusCode"] === 200 &&
              response?.["success"] === true &&
              !response?.["data"] &&
              response?.["message"]
            ) {
              this.apiService.toastError(response?.["message"]);
            }
          }
        })
        .catch((error) => {
          this.apiService.toastError(error.error.errors);
        });
    }
  }
}
