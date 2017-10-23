import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { WeatherComponent } from './weather.component';
import { W1Component } from './w1/w1.component';
import { W2Component } from './w2/w2.component';
import { W3Component } from './w3/w3.component';

const routes: Routes = [
  { path: '', component: WeatherComponent },
  { path: 'yahoo', component: W1Component },
  { path: 'facts', component: W2Component },
  { path: 'globalwarming', component: W3Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }