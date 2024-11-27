import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientsPageRoutingModule } from './clients-routing.module';

import { ClientsPage } from './clients.page';
import { ClientFormComponent } from 'src/app/components/client-form/client-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientsPageRoutingModule
  ],
  declarations: [
    ClientsPage,
    ClientFormComponent
  ]
})
export class ClientsPageModule {}
