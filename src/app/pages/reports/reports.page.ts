import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage {

  reportData = [
    { client: 'Juan Pérez', transaction: 'Compra', amount: 100 },
    { client: 'María López', transaction: 'Venta', amount: 200 },
  ];
  constructor() {}
}
