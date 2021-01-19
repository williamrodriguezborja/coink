import { Injectable } from '@angular/core';
import { enc, AES, mode, pad, MD5 } from 'crypto-js';
import { payloadDTO } from 'src/app/models/payloadDTO';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor() { }

  private static CONFIG = {
    mode: mode.ECB,
    padding: pad.Pkcs7
  };

  encrypt(message: string): string {
    const toEncryptedArray = enc.Utf8.parse(message);
    const payload = AES.encrypt(toEncryptedArray, this.getKey(), CryptoService.CONFIG);
    return payload.ciphertext.toString(enc.Base64);
  }

  encryptJSON(request: any) : payloadDTO{
    return {payload: this.encrypt(JSON.stringify(request))
    }
  }


  decrypt(message: string): string {
    const bytes = AES.decrypt(message , this.getKey(), CryptoService.CONFIG);
    return bytes.toString(enc.Utf8);
  }

  decryptJSON(message: string): any {
    return JSON.parse(this.decrypt(message))
  }


  private getKey() {
    return enc.Hex.parse(MD5(environment.key).toString());
  }
}




