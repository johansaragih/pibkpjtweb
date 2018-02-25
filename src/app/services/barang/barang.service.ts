import { Injectable } from '@angular/core';

import { Headers, Response, Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Barang } from './barang.model';
import { Observable } from 'rxjs';

@Injectable()
export class BarangService {

  constructor(private http: AuthHttp) { }

  getAllBarang(): Observable<Barang[]> {
  	let headers = new Headers({
  		'Content-Type': 'application/json'
  	});

  	let url: string = "/api/barang";
  	return this.http.get(url, {headers: headers}).map((res: Response) => res.json());
  }

  getById(id: number): Observable<Barang> {
  	let headers = new Headers({
  		'Content-Type': 'application/json'
  	});

  	let url: string = "/api/barang/" + id;
  	return this.http.get(url, {headers: headers}).map((res: Response) => res.json());
  }

  addBarang(barang: Barang): Observable<Barang> {
    return this.http.post('/api/barang', barang).
      map((res: Response) => res.json());
  }

}
