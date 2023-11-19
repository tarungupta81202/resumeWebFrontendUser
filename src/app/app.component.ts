import { Component } from "@angular/core";
import { ApiService } from "./services/api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "resumeUserPortfolio";
  showLoader_: boolean = false;
  constructor(private apiSerive: ApiService) {
    this.apiSerive.autoLogin()
    this.apiSerive.get_loader_Data().subscribe((res: boolean) => {
      this.showLoader_ = res;
    });
  }
}
