import { Component, OnInit } from "@angular/core";
import { GlobalService } from "src/app/services/global.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  showProfile: boolean = false;
  constructor(public globalService: GlobalService) {}

  ngOnInit(): void {
    if (
      window.location.href === "http://localhost:4200/live-previews"
    ) {
      this.globalService.hideHeader = false;
    }
  }

  oneProfile() {
    this.showProfile = !this.showProfile;
  }
}
