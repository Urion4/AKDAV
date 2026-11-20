
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonContent,IonIcon } from '@ionic/angular'; 

@Component({
  selector: 'app-tupedido',
  templateUrl: './tupedido.page.html',
  styleUrls: ['./tupedido.page.scss'],
  standalone: true,
  imports: [
    CommonModule,IonContent,IonIcon
  ]
})

export class TupedidoPage {

  numeroPedido = 'AKD-00127';

  nombreCliente = 'Andrea López';
  ubicacion = 'Edificio B / Salón 204';

  tipoEntrega = 'Desayuno';
  horaEntrega = '10:40-10:50';

  direccionEntrega = 'Destino y horario de entrega.';

  productos = [
    {
      id: 1,
      nombre: 'Hamburguesa clásica',
      precio: 45,
      cantidad: 1
    },
    {
      id: 2,
      nombre: 'Tacos',
      precio: 35,
      cantidad: 1
    }
  ];

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  get total(): number {
    return this.productos.reduce(
      (suma, producto) =>
        suma + producto.precio * producto.cantidad,
      0
    );
  }

  async abrirMenu() {
    const alerta = await this.alertController.create({
      header: 'Menú principal',
      message: 'Consulta los alimentos disponibles.',
      buttons: ['Aceptar']
    });

    await alerta.present();
  }

  irAlCarrito() {
    this.router.navigate(['/carrito']);
  }

  seguirPedido() {
    this.router.navigate(['/seguimiento']);
  }

  volverInicio() {
    this.router.navigate(['/home']);
  }
}