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
    this.listClient();
  }

  listClient() {
    this.clientService.getClients().subscribe({
      next: (data) => {
        this.clients = data;
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
        // this.clients.push(result.data);
        this.listClient()
      }
    });
    await modal.present();
  }

  async editClient(client: any) {
    const modal = await this.modalController.create({
      component: ClientFormComponent,
      componentProps: { client: { ...client }, isEditing: true },
    });
    console.log('Cliente', client)
    modal.onDidDismiss().then((result) => {
      if (result.data) {
        const index = this.clients.findIndex((c) => c.id === result.data.id);
        if (index !== -1) {
          // this.clients[index] = result.data;
          this.listClient();
        }
      }
    });

    await modal.present();
  }

  deleteClient(client: any) {
    this.clients = this.clients.filter((c) => c.id !== client.id);
  }
}
