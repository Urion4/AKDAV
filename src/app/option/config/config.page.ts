
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import {
  AlertController,
  IonContent,
  IonHeader,
  IonToolbar,
  IonMenu,
  IonIcon,
  IonList,
  IonMenuToggle,
  IonItem,
  IonLabel,
  IonButton,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonToggle
} from '@ionic/angular';

import { addIcons } from 'ionicons';

import {
  restaurantOutline,
  cartOutline,
  homeOutline,
  personOutline,
  settingsOutline,
  receiptOutline,
  logOutOutline,
  informationCircleOutline,
  chevronForwardOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonMenu,
    IonIcon,
    IonList,
    IonMenuToggle,
    IonItem,
    IonLabel,
    IonButton,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonToggle
  ]
})
export class ConfigPage {

  // Preferencias de notificaciones
  notificarPedidos = true;
  notificarDisponibilidad = false;

  // Preferencias visuales
  textoAmpliado = false;

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {
    addIcons({
      restaurantOutline,
      cartOutline,
      homeOutline,
      personOutline,
      settingsOutline,
      receiptOutline,
      logOutOutline,
      informationCircleOutline,
      chevronForwardOutline
    });
  }

  // Mostrar información de cada sección
  async mostrarInformacion(
    titulo: string,
    mensaje: string
  ): Promise<void> {

    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Entendido'],
      cssClass: 'akdav-alert'
    });

    await alert.present();
  }

  // Regresar al Login
  cerrarSesion(): void {
    this.router.navigateByUrl('/login', {
      replaceUrl: true
    });
  }
}
