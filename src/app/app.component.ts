import { Component, OnInit } from "@angular/core";
import { ApiService } from "./services/api.service";
import { GlobalService } from "./services/global.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "resumeUserPortfolio";
  showLoader_: boolean = false;
  constructor(
    private apiSerive: ApiService,
    private globalService: GlobalService
  ) {
    this.apiSerive.autoLogin();
    this.apiSerive.get_loader_Data().subscribe((res: boolean) => {
      this.showLoader_ = res;
    });
  }

  ngOnInit(): void {
    this.globalService.userDetails = JSON.parse(
      this.apiSerive.getSession("userDetails") || "{}"
    );
  }
}
