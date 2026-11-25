


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
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
  selector: 'app-editarp',
  templateUrl: './editarp.page.html',
  styleUrls: ['./editarp.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  
  ]
})
export class EditarpPage {

  nombre: string = 'Hamburguesa clásica';

  precio: number = 45;

  categoria: string = 'Comida';

  descripcion: string =
    'Carne, queso, lechuga y tomate. Preparada al momento para tu descanso.';

  stock: number = -2;

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

  formularioValido(): boolean {

    const nombreValido =
      this.nombre.trim().length > 0;

    const precioValido =
      Number.isFinite(this.precio) &&
      this.precio > 0;

    const stockValido =
      Number.isInteger(this.stock) &&
      this.stock >= 0;

    const categoriaValida =
      this.categoria.trim().length > 0;

    return (
      nombreValido &&
      precioValido &&
      stockValido &&
      categoriaValida
    );
  }

  async guardar() {

    if (!this.formularioValido()) {
      return;
    }

    const productoActualizado = {

      nombre: this.nombre,

      precio: this.precio,

      categoria: this.categoria,

      descripcion: this.descripcion,

      stock: this.stock,

      disponible:
        !this.noDisponible && this.stock > 0

    };

    console.log(
      'Producto actualizado:',
      productoActualizado
    );

    const toast = await this.toastController.create({

      message: 'Cambios validados correctamente',

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


