import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpClientXsrfModule, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly url = 'https://vast-shore-74260.herokuapp.com'
  constructor(private http: HttpClient) {
  }

  getData(method, url, options): Observable<any> {
    if (method === 'GET') {
      return this.http.get(`${this.url}` + url, options);
    } else if (method === 'POST') {
      const httpOptions = {
        headers: new HttpHeaders(options.headers)
      };
      return this.http.post( url, options.data, httpOptions);
    }
  }

}
