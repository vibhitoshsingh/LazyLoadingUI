import { Component, OnInit } from '@angular/core'; 
import { CurrencyService } from './currency.service';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html'
})
export class CurrencyComponent implements OnInit {
  title = "";
  totReqsMade: number = 0;
  id_currency: string = "";
  my_result: any;
  constructor(public _currencyService: CurrencyService) {
  }

  ngOnInit() {
  }


  callCurrencyService() {

    //this.id_currency = form.value.id_currency;
    this._currencyService.getCurrencyExchRate(this.id_currency.toUpperCase())
      .subscribe(
      lstresult => {
        this.my_result = JSON.stringify(lstresult);
      },
      error => {
        console.log("Error. The callCurrencyService result JSON value is as follows:");
        console.log(error);
      }
      );

  }
}
