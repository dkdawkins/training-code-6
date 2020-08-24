import { Injectable } from '@angular/core';
import { RequestService } from './request.service'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private req: RequestService) {}

  getImageUrl(): Observable<string> {
    return this.req.getImageUrl();
  }
}
