import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {

  @Input() client: any;
  @Input() isEditing = false;

  // El formulario se inicializa aquí
  form = {
    fullName: '',
    email: '',
    phone: null,
    creditAmount: null,
    referenceContact: '',
  };

  constructor(
    private modalController: ModalController,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    // Si estamos en modo edición, asignamos los valores del cliente al formulario
    if (this.isEditing && this.client) {
      this.form.fullName = this.client.fullName;
      this.form.email = this.client.email;
      this.form.phone = this.client.phone;
      this.form.creditAmount = this.client.creditAmount;
      this.form.referenceContact = this.client.referenceContact;
    }
  }

  closeModal() {
    this.modalController.dismiss();
  }

  saveClient() {
    if (this.isEditing) {
      this.editClient();
    } else {
      this.createClient();
    }
  }

  createClient() {
    this.clientService.postClient(this.form).subscribe({
      next: (client) => {
        console.log('Cliente creado:', client);
        this.modalController.dismiss(client); // Pasamos el cliente creado al componente principal
      },
      error: (err) => {
        console.error('Error al crear cliente:', err);
      },
    });
  }

  editClient() {
    this.clientService.putClient(this.client._id, this.form).subscribe({
      next: (updatedClient) => {
        console.log('Cliente actualizado:', updatedClient);
        this.modalController.dismiss(updatedClient); // Pasamos el cliente actualizado al componente principal
      },
      error: (err) => {
        console.error('Error al actualizar cliente:', err);
      },
    });
  }
}
