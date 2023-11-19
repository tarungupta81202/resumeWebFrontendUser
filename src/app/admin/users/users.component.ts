import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  users: any = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.callUser();
  }

  callUser() {
    this.apiService
      .getMethod("users")
      .then((response: any) => {
        console.warn(response);
        
        if (
          response["statusCode"] === 200 &&
          response?.["success"] === true &&
          response?.["data"]
        ) {
          if (response?.["data"]) {
            this.users = response?.["data"];
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
        this.apiService.toastError(error.message);
      });
  }
}
