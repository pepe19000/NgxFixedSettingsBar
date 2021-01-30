import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxFixedSettingsBarModule } from 'ngx-fixed-settings-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgxFixedSettingsBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
