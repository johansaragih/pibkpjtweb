import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';

import { Package } from './../models/package.model';

import { Observable } from 'rxjs';

@Injectable()
export class PackagesService {

  constructor(private http: Http) { }

  getAllPackages(): Observable<Package[]> {

  	let basicAuthHeader = "Basic dXNlcjpwYXNzd29yZA==";
  	let headers = new Headers({ 
  		'Content-Type': 'application/json',
  		'Authorization' : basicAuthHeader
  	});

   	return this.http.get("http://35.198.240.25:8080/pibkpjt/api/barang")
	   .map(this.extractData)
	   .catch(this.handleError);
  }

  private extractData(res: Response) {
	let body = res.json();
    return body;
  }
    
  private handleError (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.status);
  }
}
