import { Component, OnInit } from "@angular/core";
import { FormsService } from "../services/forms.service";
import { Route, Router } from "@angular/router";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(
    public formService: FormsService,
    private router: Router,
    public apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.formService.loginForm.get("email")?.setValue("tg@gmail.com");
    this.formService.loginForm.get("password")?.setValue("123");
  }

  async loginSubmit() {
    if (this.formService.loginForm.get("email")?.valid) {
      if (
        this.formService.loginForm.get("email")?.value === "tg@gmail.com" &&
        this.formService.loginForm.get("password")?.value === "123"
      ) {
        const response = await this.apiService.postMethod('users/login',this.formService.loginForm.value)
        console.log(response);

        this.router.navigateByUrl("user");
      }
    }
  }
}
