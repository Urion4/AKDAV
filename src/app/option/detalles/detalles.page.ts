import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonIcon,
  IonToggle,
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
    FormsModule,
    IonContent,
    IonIcon,
    IonToggle
  ]
})
export class DetallesPage {

  // Datos del producto
  nombre: string = '';
  precio: number | null = null;
  categoria: string = 'Comida';
  descripcion: string = '';

  // Stock y disponibilidad
  stock: number | null = 0;
  noDisponible: boolean = true;

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

  // VALIDAR STOCK
  stockValido(): boolean {
    return (
      this.stock !== null &&
      this.stock !== undefined &&
      Number.isFinite(Number(this.stock)) &&
      Number.isInteger(Number(this.stock)) &&
      Number(this.stock) >= 0
    );
  }

  // VALIDAR FORMULARIO
  formularioValido(): boolean {
    return (
      this.nombre.trim().length > 0 &&
      this.categoria.trim().length > 0 &&
      this.precio !== null &&
      Number.isFinite(Number(this.precio)) &&
      Number(this.precio) > 0 &&
      this.stockValido()
    );
  }

  // GUARDAR CAMBIOS
  async guardar() {

    if (!this.formularioValido()) {
      const toast = await this.toastController.create({
        message: 'Revisa los datos del producto antes de continuar.',
        duration: 2000,
        position: 'bottom',
        color: 'warning'
      });

      await toast.present();
      return;
    }

    const toast = await this.toastController.create({
      message: 'Datos validados correctamente. Guardado pendiente de implementar.',
      duration: 2500,
      position: 'bottom',
      color: 'success'
    });

    await toast.present();

    // Aquí posteriormente conectaremos el guardado
    // con la base de datos o API de AKDAV.
  }

  // REGRESAR
  volver() {
    this.router.navigate(['/menu']);
  }

}
