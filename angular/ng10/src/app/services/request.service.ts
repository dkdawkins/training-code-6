import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http: HttpClient) {}

  getImageUrl(): Observable<any> {
    //let result: string; // sync

    // fetch('http://localhost:5000/api/image').then((res) => {
    //   res.text().then((data) => {
    //     result = data;
    //   })
    // }); // async(promise)

    // return result; // sync - undefined
    return this.http.get<any>('http://localhost:5000/api/image'); // react(observable); this would work if service didn't use IActionResult

  }
}
