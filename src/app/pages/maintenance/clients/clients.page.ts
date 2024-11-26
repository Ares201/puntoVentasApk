import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClientFormComponent } from 'src/app/components/client-form/client-form.component';
import { ClientService } from 'src/app/services/client.service';// Importa tu servicio

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {
  clients: any[] = []; // La lista de clientes se cargará desde la API

  constructor(
    private modalController: ModalController,
    private clientService: ClientService // Inyecta el servicio
  ) {}

  ngOnInit() {
    this.loadClients(); // Carga los clientes al inicializar la página
  }

  loadClients() {
    this.clientService.getClients().subscribe({
      next: (data) => {
        this.clients = data; // Asigna los datos obtenidos a la lista de clientes
        console.log('Clientes cargados:', data);
      },
      error: (err) => {
        console.error('Error al cargar clientes:', err);
      },
    });
  }

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
