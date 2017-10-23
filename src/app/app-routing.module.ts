import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketsComponent } from './base/markets.component';
import { SportsComponent } from './base/sports.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/markets', pathMatch: 'full' },
  { path: 'markets', component: MarketsComponent },
  { path: 'sports', component: SportsComponent },
   { path: 'weather', loadChildren: './weather/weather.module#WeatherModule' },
  { path: 'currency', loadChildren: './currency/currency.module#CurrencyModule' } 
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
