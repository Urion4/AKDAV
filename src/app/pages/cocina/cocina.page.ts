import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonMenuButton,
  IonContent, IonIcon, IonCard, IonCardContent, IonInput,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { cartOutline, informationCircleOutline } from 'ionicons/icons';

interface ItemPedido { cantidad: number; nombre: string; precio: number; }

@Component({
  selector: 'app-cocina',
  standalone: true,
  templateUrl: './cocina.page.html',
  styleUrls: ['./cocina.page.scss'],
  imports: [
    CommonModule, FormsModule,
    IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonMenuButton,
    IonContent, IonIcon, IonCard, IonCardContent, IonInput,
  ],
})
export class CocinaPage {
  preparando = 1;
  listos = 0;
  enCamino = 0;

  pedido = {
    folio: 'AKD-00127',
    cliente: 'Andrea López',
    ubicacion: 'Edificio B · Salón 204 (ejemplo)',
    estado: 'En preparación',
    recibido: '10:24',
    salida: '10:40',
    items: [
      { cantidad: 1, nombre: 'Hamburguesa clásica', precio: 45 },
      { cantidad: 1, nombre: 'Tacos', precio: 35 },
    ] as ItemPedido[],
  };

  efectivoPrevisto = 100;
  efectivoRecibido: number | null = null;

  constructor() {
    addIcons({ cartOutline, informationCircleOutline });
  }

  get total(): number {
    return this.pedido.items.reduce((s, i) => s + i.cantidad * i.precio, 0);
  }

  /** Cambio según lo previsto hasta que se capture el efectivo real */
  get cambio(): number {
    const base = this.efectivoRecibido ?? this.efectivoPrevisto;
    return Math.max(base - this.total, 0);
  }

  get puedeRegistrar(): boolean {
    return (this.efectivoRecibido ?? 0) >= this.total;
  }

  marcarListo() {
    this.preparando = Math.max(this.preparando - 1, 0);
    this.listos++;
    this.pedido.estado = 'Listo';
  }

  enCaminoClick() {
    if (this.listos > 0) this.listos--;
    else this.preparando = Math.max(this.preparando - 1, 0);
    this.enCamino++;
    this.pedido.estado = 'En camino';
  }

  registrarEfectivo() {
    // TODO: llamar a tu servicio / API de pagos
    console.log('Efectivo registrado', this.efectivoRecibido, 'cambio', this.cambio);
  }
}