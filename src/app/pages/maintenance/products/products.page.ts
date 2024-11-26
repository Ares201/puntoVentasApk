import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ProductFormComponent } from 'src/app/components/product-form/product-form.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products = [
    { id: 1, name: 'Producto 1', price: 50, stock: 10 },
    { id: 2, name: 'Producto 2', price: 30, stock: 5 },
  ];

  constructor(
    private modalController: ModalController,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  async openProductModal(product: any = null) {
    const modal = await this.modalController.create({
      component: ProductFormComponent,
      componentProps: { product }
    });
    modal.onDidDismiss().then((data) => {
      if (data.data) {
        if (product) {
          const index = this.products.findIndex((p) => p.id === product.id);
          if (index > -1) {
            this.products[index] = data.data;
          }
        } else {
          this.products.push(data.data);
        }
      }
    });
    await modal.present();
  }
  editProduct(product: any) {
    this.openProductModal(product); // Reutilizar el modal para edición
  }
  async deleteProduct(product: any) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: `¿Estás seguro de que deseas eliminar el producto "${product.name}"?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            // Aquí va la lógica para eliminar el producto de la lista
            this.products = this.products.filter(p => p.id !== product.id);
            console.log('Producto eliminado:', product);
          }
        }
      ]
    });
    await alert.present();
  }

}
