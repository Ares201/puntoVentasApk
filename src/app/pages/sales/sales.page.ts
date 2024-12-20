import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {
  products = [
    { id: 1, name: 'P.1', price: 10, stock: 5, image: 'https://www.tiendaperuonline.com/cdn/shop/products/Panetone_1024x1024.jpg?v=1698311798', clickCount: 0 },
    { id: 2, name: 'P.2', price: 20, stock: 3, image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/tottusPE/20114871_1/w=1500,h=1500,fit=pad', clickCount: 0 },
    { id: 3, name: 'P.3', price: 30, stock: 8, image: 'https://tiendanestle.pe/cdn/shop/files/Hero.jpg?v=1727904781', clickCount: 0 },
  ];
  categorys = [
    { id: 1, name: 'Bebidas', description: 'Bebidas refrescantes y jugos.', icon: 'beer', color: '#f0ad4e', isActive: true, priority: 1 },
    { id: 2, name: 'Embutidos', description: 'Embutidos variados como salchichones y jamones.', icon: 'nutrition', color: '#ff6347', isActive: true, priority: 2 },
    { id: 3, name: 'Panadería', description: 'Panadería artesanal y panes especiales.', icon: 'basket', color: '#ffd700', isActive: true, priority: 3 },
    { id: 4, name: 'Frutas', description: 'Frutas frescas y orgánicas.', icon: 'apple', color: '#4CAF50', isActive: true, priority: 4 },
    { id: 5, name: 'Verduras', description: 'Verduras frescas y locales.', icon: 'leaf', color: '#8BC34A', isActive: true, priority: 5 },
    { id: 6, name: 'Lácteos', description: 'Leches, quesos y otros productos lácteos.', icon: 'wine', color: '#607D8B', isActive: true, priority: 6 }
  ];
  cartCount = 0;

  constructor() {}

  ngOnInit() {
  }

  addToCart(product: any) {
    if (product.stock > 0) {
      product.clickCount++;
      product.stock--; // Descontar una unidad del stock
      console.log(`${product.name} agregado ${product.clickCount} veces. Stock restante: ${product.stock}`);
      this.cartCount = this.products.reduce((total, item) => total +  item.clickCount, 0 )
      console.log(`Total en el carrito: ${this.cartCount} productos`);
    } else {
      console.log(`No hay suficiente stock de ${product.name}.`);
    }
  }
}

