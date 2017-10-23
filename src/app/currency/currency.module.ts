import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { CurrencyComponent } from './currency.component';
import { CurrencyRoutingModule } from './currency-routing.module';
import { CurrencyService } from './currency.service';
@NgModule({
  imports: [
    CommonModule, CurrencyRoutingModule, FormsModule, HttpModule
  ],
  declarations: [CurrencyComponent],
  providers: [CurrencyService]
})
export class CurrencyModule { }
