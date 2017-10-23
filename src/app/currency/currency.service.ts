import { Injectable } from '@angular/core';

import { Http, Headers, Response } from "@angular/http";

import 'rxjs/Rx';
import { Observable } from "rxjs";
@Injectable()

export class CurrencyService {
    currencyURL = "http://api.fixer.io/latest?symbols=";
    totReqsMade: number = 0;
    constructor(private _http: Http) { }

    getCurrencyExchRate(currency) {
        this.totReqsMade = this.totReqsMade + 1;
        return this._http.get(this.currencyURL + currency)
            .map(response => {
                { return response.json() };
            })
            .catch(error => Observable.throw(error.json()));
    }
}
