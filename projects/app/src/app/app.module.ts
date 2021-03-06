import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloModule } from '@mrvonwyl/hello';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HelloModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
