import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { LenovoComponent } from './lenovo/lenovo.component';


@NgModule({
  declarations: [LenovoComponent],
  imports: [
    CommonModule,
    FormsModule,
    SecondRoutingModule
  ]
})
export class SecondModule { }
