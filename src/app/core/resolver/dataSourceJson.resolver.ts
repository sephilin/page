import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


/**
* Appel au service d'obtention des demandes de remboursement
*/
@Injectable()
export class DataSourceJsonResolver implements Resolve<any> {
    constructor(private http: HttpClient) { }

    private _jsonURL = 'assets/ressource.json';

    private getJSON(): Observable<any> {
        return this.http.get(this._jsonURL);
    }

    resolve(): Promise<Array<any>> {
        return this.getJSON().toPromise();
    }
}