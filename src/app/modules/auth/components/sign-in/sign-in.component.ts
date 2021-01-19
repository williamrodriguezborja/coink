import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Credentials } from 'src/app/models/credentials';
import { AuthService } from 'src/app/modules/core/services/auth/auth.service';
import { ROUTES_PURCHASE } from 'src/app/modules/purchase/constants/routes';
import { AUTH_ROUTES } from '../../constants/routes';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit, OnDestroy {
  signInForm: FormGroup
  signInSuscription: Subscription | null = null;
  isLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {

    this.signInForm = this.fb.group({
      emailField: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(5),
          Validators.maxLength(100),
        ]
      ],
      passwordField: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(255),
        ]
      ]
    });
  }

  ngOnInit(): void {

  }

  signIn(event: Event): void {
    event.preventDefault()
    this.isLoading = true;
    const {emailField, passwordField} = this.signInForm.value
    const credentials: Credentials = {
      user_mail: emailField,
      user_password: passwordField
    }
    this.signInSuscription = this.auth.signIn(credentials).subscribe(response=>{
        this.isLoading = false;
        this.router.navigate(['auth/' + AUTH_ROUTES.OTP])
    });
  }

  ngOnDestroy(): void {
    this.signInSuscription?.unsubscribe()
  }

  get email() { return this.signInForm.get('emailField'); }

  get password() { return this.signInForm.get('passwordField'); }
}
