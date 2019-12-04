
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const siteKey = "6Lc1rMUUAAAAAOvQPJ7Jt2tzX96yYK5-zGB1KrF9";
const urlCaptcha: string = "https://www.google.com/recaptcha/api/siteverify";
const httpOptions = {
    headers: new HttpHeaders({
        ["Access-Control-Allow-Origin"]: "*",
        ["Access-Control-Allow-Headers"]: "Origin, Content-Type, Authorization, X-Auth-Token",
        ["Access-Control-Allow-Methods"]: "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS"
    })
  };
  
@Injectable({
    providedIn: 'root'
})
export class CaptchaService {

    constructor(private http: HttpClient) {

    }

    public verifySite(token: string): Observable<any> {

        return this.http.post<any>(urlCaptcha, {
            secret: siteKey,
            response: token
        });    
    }

}


