import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClientFormComponent } from 'src/app/components/client-form/client-form.component';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage {
  clients = [
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com', phone: '987654321' },
    { id: 2, name: 'María López', email: 'maria@example.com', phone: '987123456' },
    { id: 3, name: 'María López', email: 'maria@example.com', phone: '987123456', creditAmount: 600, referenceContact: '', showCreditModal: false },
  ];

  constructor(private modalController: ModalController) {}

  async openAddClientModal() {
    const modal = await this.modalController.create({
      component: ClientFormComponent,
      componentProps: { client: null, isEditing: false },
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        this.clients.push(result.data);
      }
    });

    await modal.present();
  }

  async editClient(client: any) {
    const modal = await this.modalController.create({
      component: ClientFormComponent,
      componentProps: { client: { ...client }, isEditing: true },
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        const index = this.clients.findIndex((c) => c.id === result.data.id);
        if (index !== -1) {
          this.clients[index] = result.data;
        }
      }
    });

    await modal.present();
  }

  deleteClient(client: any) {
    this.clients = this.clients.filter((c) => c.id !== client.id);
  }
  toggleCreditModal(client: any) {
    client.showCreditModal = !client.showCreditModal;
  }
  closeCreditModal(client: any) {
    client.showCreditModal = false;
  }

  saveCreditDetails(client: any) {
    console.log(`Crédito guardado para ${client.name}:`, {
      amount: client.creditAmount,
      reference: client.referenceContact,
    });
    client.showCreditModal = false;
  }

}
