import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  hideFooter:any=false
  constructor() { }

  ngOnInit(): void {
    if(window.location.href === 'http://localhost:4200/dashboard/fill-in') {
      this.hideFooter = false;
    }
  }

}
