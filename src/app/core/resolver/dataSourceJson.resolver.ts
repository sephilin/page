import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


/**
* Appel au service d'obtention des ressource json
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

// const Parse = require('parse/node');
// https://page-vitor-menezes.back4app.io/classes/ressource?where=%7B%20%22objectId%22%3A%20%227MI5MgnZ05%22%20%7D
// Parse.serverURL = 'https://page-vitor-menezes.back4app.io'; // This is your Server URL
// Parse.initialize(
//   'RhpPZ2D36l72oTLK3F4gbo0smePltOZFwaptb6N6', // This is your Application ID
//   'w7S7jA3pcAuq9tem7zz2GErQUFWQFrYV4IAeKP67', // This is your Javascript key
//   'dcBZ7ZPnlHGdIGCSwzOQKNU18HiYr2i4ZKbThcKN' // This is your Master key (never use it in the frontend)
// );

// const ressource = Parse.Object.extend('ressource');
// const query = new Parse.Query(ressource);
// query.equalTo("data", 'A string');
// query.find().then((results) => {
//   // You can use the "get" method to get the value of an attribute
//   // Ex: response.get("<ATTRIBUTE_NAME>")
//   if (typeof document !== 'undefined') 
// document.write(`ressource found: ${JSON.stringify(results)}`);
//   console.log('ressource found', results);
// }, (error) => {
//   if (typeof document !== 'undefined') document.write(`Error while fetching ressource: ${JSON.stringify(error)}`);
//   console.error('Error while fetching ressource', error);
// });