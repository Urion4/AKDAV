

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonIcon,
  ToastController
} from '@ionic/angular';

import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  cartOutline,
  alertCircleOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonIcon
  ]
})
export class DetallesPage {

  cantidad: number = 1;

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {
    addIcons({
      arrowBackOutline,
      cartOutline,
      alertCircleOutline
    });
  }

  sumar() {
    this.cantidad++;
  }

  restar() {
    if (this.cantidad > 1) {
      this.cantidad--;
    }
  }

  async agregar(producto: string) {
    const toast = await this.toastController.create({
      message: producto + ' agregado al carrito',
      duration: 2000,
      position: 'bottom',
      color: 'success'
    });

    await toast.present();
  }

  volver() {
    this.router.navigate(['/menu']);
  }

}
