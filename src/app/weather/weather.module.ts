import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
 
import { WeatherComponent } from './weather.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { W1Service } from './w1/w1.service';
import { W1Component } from './w1/w1.component';
import { W2Component } from './w2/w2.component';
import { W3Component } from './w3/w3.component';

@NgModule({
  imports: [
    CommonModule, WeatherRoutingModule, FormsModule, HttpModule
  ],
  declarations: [WeatherComponent, W1Component, W2Component, W3Component],
  providers: [W1Service]
})
export class WeatherModule { }
