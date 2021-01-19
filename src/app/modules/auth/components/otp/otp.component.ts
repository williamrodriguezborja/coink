import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ROUTES_PURCHASE } from 'src/app/modules/purchase/constants/routes';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.sass']
})
export class OtpComponent implements OnInit {
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router
    ) {
    this.form = this.fb.group({
      otp: ['', [
        Validators.required, 
        Validators.pattern(new RegExp("^[0-9]")),
        Validators.minLength(6), 
        Validators.maxLength(6)]
      ]
    })
   }

  ngOnInit(): void { }
  onSubmit(event: Event){
    event.preventDefault()
    this.router.navigate(['purchases/' + ROUTES_PURCHASE.LIST])
  }

  get otp(){return this.form?.get('otp')}
}
