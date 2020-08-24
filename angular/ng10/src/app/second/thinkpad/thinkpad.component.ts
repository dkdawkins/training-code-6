import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-thinkpad',
  templateUrl: './thinkpad.component.html',
  styleUrls: ['./thinkpad.component.css']
})
export class ThinkpadComponent implements OnInit {

  image: Observable<string>;

  constructor(private img: ImageService) {}

  ngOnInit(): void {
    let fn = (data) => { this.image = data };
    this.img.getImageUrl();
  }

}
