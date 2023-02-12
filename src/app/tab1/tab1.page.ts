import { Component } from '@angular/core';
import { itemPhone } from './item-phone/item-phone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //[x: string]: DataSource<any>|Observable<any[]>|NgIterable<any>;

  items: {item: itemPhone}[] = [];
  constructor() {
    //hier items-Array mit loop befüllen / initialisieren
  } 
  
}
