import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpClientXsrfModule, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {map, publishReplay, refCount} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly url = 'https://vast-shore-74260.herokuapp.com';
  public list = { };
  constructor(private http: HttpClient) {
  }

  getData(method, url, options): Observable<any> {
    if (method === 'GET') {
      if (!this.list[options.params.city]) {
        this.list[options.params.city] =  this.http.get(`${this.url}` + url, options).pipe(
          map(data => data),
          publishReplay(1), // this tells Rx to cache the latest emitted
          refCount() // and this tells Rx to keep the Observable alive as long as there are any Subscribers
        );
      }
      return this.list[options.params.city];
    } else if (method === 'POST') {
      const httpOptions = {
        headers: new HttpHeaders(options.headers)
      };
      return this.http.post( url, options.data, httpOptions);
    }
  }

}
