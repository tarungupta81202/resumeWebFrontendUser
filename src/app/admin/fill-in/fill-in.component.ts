import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fill-in",
  templateUrl: "./fill-in.component.html",
  styleUrls: ["./fill-in.component.scss"],
})
export class FillInComponent implements OnInit {
  showGeneral: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  opencollapseSection(id: any) {
    console.warn(id);
    this.showGeneral = !this.showGeneral;
  }

  closecollapseSection(id: any) {
    console.warn(id);
    this.showGeneral = !this.showGeneral;
  }
}
