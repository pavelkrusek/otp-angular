import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WebOtpDirective } from './web-otp.directive';
import { AutoFillComponent } from './auto-fill/auto-fill.component';
import {FormsModule} from "@angular/forms";
import {CodeInputModule} from "angular-code-input";

@NgModule({
  declarations: [
    AppComponent,
    WebOtpDirective,
    AutoFillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CodeInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
