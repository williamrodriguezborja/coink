import { Component, OnInit } from '@angular/core';
import { SelectType } from 'src/models/SelectType';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  age: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', age: 15},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', age: 15},
];


@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.sass']
})
export class PurchasesComponent implements OnInit {

  constructor() { }

  fields: SelectType[] = [
    {
      viewValue: 'Nombre',
      value: 'name'
    },
    {
      viewValue: 'Cel',
      value: 'phone'
    },
    {
      viewValue: 'Fecha de compra',
      value: 'date'
    },
    {
      viewValue: 'Edad',
      value: 'age'
    },
  ]

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

}
