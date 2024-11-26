import { Component, Input  } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  @Input() product: any; // Producto recibido para edición
  form = {
    name: '',
    price: null,
    stock: null,
  };

  constructor(private modalController: ModalController) {}
  ngOnInit() {
    if (this.product) {
      // Cargar datos del producto en el formulario
      this.form = { ...this.product };
    }
  }

  closeModal() {
    this.modalController.dismiss();
  }

  saveProduct() {
    console.log('Producto guardado:', this.product);
    this.modalController.dismiss(this.product);
  }

}
