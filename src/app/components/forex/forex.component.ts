import { Component, OnInit } from '@angular/core';
import { ForexService } from 'src/app/services/forex.service';
import { Exchange } from 'src/app/models/Forex.models';
import { Symbol } from 'src/app/models/Forex.models';

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements OnInit {

  exchanges: Exchange[];
  selectedExchange: Exchange = { name: ''};
  symbols: Symbol[];
  selectedSymbol = '';




  constructor(
     private forexService: ForexService
  ) {
    this.exchanges =[];
    this.symbols = [];

  }


  ngOnInit(): void {
    this.forexService.getAllExchanges().subscribe((exchanges:any) => {
      console.log(exchanges);
      this.exchanges= exchanges;
    });


  }

  getSymbolsForExchange() {
    console.log('dropdown value changed');
    console.log(this.selectedExchange)
    this.forexService.getAllSymbols(this.selectedExchange).subscribe((symbols:any) => {
      console.log(symbols);
      for (let i=0; i < symbols.length; i++) {
        this.symbols.push(symbols[i].displaySymbol)
      }

      
    })

  }


}
