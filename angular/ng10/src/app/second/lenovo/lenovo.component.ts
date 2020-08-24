import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lenovo',
  templateUrl: './lenovo.component.html',
  styleUrls: ['./lenovo.component.css']
})
export class LenovoComponent implements OnInit {
  oneway: string;
  twoway: string;
  image$: Observable<string>;
  image: string;

  constructor(private img: ImageService) {}

  ngOnInit(): void {
    this.oneway = 'hello angular';
    this.twoway = 'say something';
    this.image$ = this.img.getImageUrl();
    this.image$.subscribe((res) => {
      console.log(res);
    })
  }

}
