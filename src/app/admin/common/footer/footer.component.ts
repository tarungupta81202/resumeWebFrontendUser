import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public globalService:GlobalService) { }

  ngOnInit(): void {
    if (window.location.href === 'http://localhost:4200/dashboard/live-previews') {
      this.globalService.hideFooter = false
    }
  }

}
