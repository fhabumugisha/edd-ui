import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
showButton = true;
showAlert =  true;
userAlert = 'Suucess';
showUserAlertMsg= '';
  constructor() {
    setTimeout(function() {
     this.showButton = true;
    }, 2000);
   }

  ngOnInit() {
  }

  hideAlert() {
    if ( this.showAlert) {
      this.showAlert =  false;

    }else {
      this.showAlert =  true;
    }
  }

  /*
  *
  */
  onUpdateAlert(event: Event ) {
    this.userAlert = (<HTMLInputElement>event.target).value;
  }
  showUserAlert() {
    this.showUserAlertMsg = 'The user alert is :' + this.userAlert;

  }

}
