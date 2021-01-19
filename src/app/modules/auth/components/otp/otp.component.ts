import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.sass']
})
export class OtpComponent implements OnInit {

  constructor() { }

  otp:string = '';

  ngOnInit(): void {
  }

}
