import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from 'src/app/models/credentials';
import { environment } from 'src/environments/environment';
import { CryptoService } from '../crypto/crypto.service';
import { tap } from 'rxjs/operators'
import { Router } from '@angular/router';

const SESSION_KEY = 'session';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private crypto: CryptoService,
    private router: Router
  ) { }


  setSession(jwtToken: string){
    localStorage.setItem(SESSION_KEY, jwtToken);
  }

  defaultOptions(){
    return {
      headers: this.getAuthHeaders(this.getSession()),
      params: this.getAuthParams()
    }

  }

  getAuthHeaders(session: string | null){
    if(!session)
      return new HttpHeaders()
      
    return new HttpHeaders({
      Authorization: session
    });
  }

  getAuthParams(){
    return  new HttpParams().set('apiKey', environment.apiKey)
  }

  getSession(){
    return localStorage.getItem(SESSION_KEY)
  }

  logout(){
    localStorage.clear();
    this.router.navigate([''])
  }

  signIn(credentials: Credentials) {
    const payloadEncrypted = this.crypto.encrypt(JSON.stringify(credentials));
    const body = { payload: payloadEncrypted };

    const options = { params: this.getAuthParams() };

    return this.http.post(`${environment.apiUrl}/login`, body, options)
            .pipe(
              tap(token=>{
                  this.setSession(token.toString())
              })
            );
  }
}


