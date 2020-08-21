import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DavidComponent } from './david/david.component';
import { KennyComponent } from './kenny/kenny.component';
import { SecondModule } from './second/second.module';

@NgModule({
  declarations: [
    AppComponent,
    DavidComponent,
    KennyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FormsModule,
    SecondModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
