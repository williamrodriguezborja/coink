import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/models/user';
import './header.component.sass';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // console.log(this.user);
  }
}
