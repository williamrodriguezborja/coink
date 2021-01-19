import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {
  user: User = {
    id      : 1,
    name    : '',
    password: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

  signIn(event: Event): void{
    console.log(this.user);
  }
}
