  
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Exchange } from '../models/Forex.models';
import { Symbol } from '../models/Forex.models';

const route = environment.finnhub.baseUrl;
const apiKey = environment.finnhub.apiKey;

@Injectable({
  providedIn: 'root'
})
export class ForexService {

  

  constructor(private http: HttpClient) { 

  }

  
  public getAllExchanges(): Observable<Exchange[]> {
    return this.http
        .get<Array<Exchange>>(`${route}/forex/exchange?token=${apiKey}`).pipe(
            catchError(error => {
                console.error(error);
                return of([]);
            })
        );
}

  public getAllSymbols(exchange: Exchange): Observable<Symbol[]> {
    console.log(exchange)
    return this.http.get<Array<Symbol>>(`${route}/forex/symbol?exchange=${exchange}&token=${apiKey}`).pipe(
      catchError(error => {
        console.error(error);
        return of([]);
    })
    )
  }



}
