import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  userDetails: any;
  hideHeader: boolean = true;
  hideFooter: boolean = true;

  constructor(private router: Router) {}

  gotoRoute(url: string) {
    this.router.navigateByUrl(url);
  }
}
