import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { LenovoComponent } from './lenovo/lenovo.component';
import { ThinkpadComponent } from './thinkpad/thinkpad.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LenovoComponent, ThinkpadComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SecondRoutingModule
  ]
})
export class SecondModule { }
