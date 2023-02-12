import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-phone',
  templateUrl: './item-phone.component.html',
  styleUrls: ['./item-phone.component.scss'],
})
export class ItemPhoneComponent implements OnInit {

  items: {name: string, price: number}[] = [
    {name: 'test1', price: 5},
    {name: 'test2', price: 45}
  ];

  constructor() { 
   }

  ngOnInit() {}

}



