import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { payloadDTO } from 'src/app/models/payloadDTO';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../core/services/auth/auth.service';
import { CryptoService } from '../../core/services/crypto/crypto.service';
import { PurchaseItem } from '../models/PurchaseItem';
import { PurchaseResponse } from '../models/PurchaseResponse';
import { purchasesRequest } from '../models/purchasesRequest'


const PURCHASE_PATH = 'pockets/reports/transactions/purchases'
const EXPORT_PATH = 'pockets/reports/transactions/purchases/export'

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private crypto: CryptoService
  ) { }

  getPurchases(request: purchasesRequest) :Observable<PurchaseResponse>{
    const options = this.auth.defaultOptions()

    const body = this.crypto.encryptJSON(request)
    return this.http.post<payloadDTO>(`${environment.apiUrl}/${PURCHASE_PATH}`, body, options).pipe(
      map(data=>{
        return this.crypto.decryptJSON(data.payload) as PurchaseResponse
      })
    )
  }


  export(request: purchasesRequest) : Observable<string>{
    const options = this.auth.defaultOptions()
    const body = this.crypto.encryptJSON(request)
    return this.http.post<payloadDTO>(`${environment.apiUrl}/${EXPORT_PATH}`, body, options).pipe(
      map(response=>{
        return this.crypto.decrypt(response.payload)
      })
    )
  }
}
