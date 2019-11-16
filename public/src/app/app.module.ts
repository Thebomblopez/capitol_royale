import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Http Service
import { HttpClientModule } from '@angular/common/http'
import { HttpService } from './http.service';
import { DriverComponent } from './driver/driver.component';
import { RiderComponent } from './rider/rider.component';


@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    RiderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
