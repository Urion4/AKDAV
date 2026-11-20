
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  AlertController } from '@ionic/angular';
import { IonIcon,IonContent } from '@ionic/angular';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
  imagen: string;
}

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [
    CommonModule,IonContent,IonIcon 
  ]
})

export class CarritoPage {

  productos: Producto[] = [

    {
      id: 1,
      nombre: 'Hamburguesa clásica',
      precio: 45,
      cantidad: 1,
      imagen: 'assets/img/hamburguesa.png'
    },

    {
      id: 2,
      nombre: 'Tacos',
      precio: 35,
      cantidad: 1,
      imagen: 'assets/img/tacos.png'
    }

  ];

  cargoServicio: number = 0;

  constructor(
    private alertController: AlertController
  ) {}

  // Calcular subtotal
  get subtotal(): number {

    return this.productos.reduce(
      (total, producto) =>
        total + producto.precio * producto.cantidad,
      0
    );

  }

  // Calcular total
  get total(): number {

    return this.subtotal + this.cargoServicio;

  }

  // Aumentar cantidad
  aumentar(producto: Producto) {

    producto.cantidad++;

  }

  // Disminuir cantidad
  disminuir(producto: Producto) {

    if (producto.cantidad > 1) {

      producto.cantidad--;

    } else {

      this.eliminarProducto(producto.id);

    }

  }

  // Eliminar producto
  eliminarProducto(id: number) {

    this.productos = this.productos.filter(
      producto => producto.id !== id
    );

  }

  // Agregar alimentos
  async agregarAlimento() {

    const alerta = await this.alertController.create({

      header: 'Agregar alimentos',

      message: 'Regresa al menú para seleccionar más alimentos.',

      buttons: [
        {
          text: 'Aceptar',
          role: 'confirm'
        }
      ],

      cssClass: 'alerta-personalizada'

    });

    await alerta.present();

  }

  // Confirmar pedido
  async confirmarPedido() {

    const alerta = await this.alertController.create({

      header: 'Confirmar pedido',

      message: `El total de tu compra es de $${this.total.toFixed(2)} MXN. ¿Deseas continuar?`,

      buttons: [

        {
          text: 'Cancelar',
          role: 'cancel'
        },

        {
          text: 'Confirmar',

          handler: () => {

            console.log('Pedido confirmado');

          }

        }

      ],

      cssClass: 'alerta-personalizada'

    });

    await alerta.present();

  }

  // Regresar
  volver() {

    window.history.back();

  }

}
