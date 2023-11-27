import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  userDetails:any;
  hideHeader:boolean=true;
  hideFooter:boolean=true;

  constructor() { }
}
