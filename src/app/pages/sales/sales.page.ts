import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {
  products: any[] = [];
  cartCount = 0;

  constructor() {}

  ngOnInit() {
    this.products = [
      { id: 1, name: 'P.1', price: 10, stock: 5, image: 'https://www.tiendaperuonline.com/cdn/shop/products/Panetone_1024x1024.jpg?v=1698311798', clickCount: 0 },
      { id: 2, name: 'P.2', price: 20, stock: 3, image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/tottusPE/20114871_1/w=1500,h=1500,fit=pad', clickCount: 0 },
      { id: 3, name: 'P.3', price: 30, stock: 8, image: 'https://tiendanestle.pe/cdn/shop/files/Hero.jpg?v=1727904781', clickCount: 0 },
    ];
  }

  addToCart(product: any) {
    if (product.stock > 0) {
      product.clickCount++;
      product.stock--; // Descontar una unidad del stock
      console.log(`${product.name} agregado ${product.clickCount} veces. Stock restante: ${product.stock}`);
    } else {
      console.log(`No hay suficiente stock de ${product.name}.`);
    }
  }
}

