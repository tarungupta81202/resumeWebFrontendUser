import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public globalService:GlobalService) { }

  ngOnInit(): void {
    if(window.location.href === 'http://localhost:4200/dashboard/fill-in') {
      this.globalService.hideFooter = false;
    }
  }

}
