
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonButton,IonContent,IonIcon,IonInput, ToastController } from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  menuOutline,
  cartOutline,
  personOutline,
  mailOutline,
  cellular,
  wifi,
  batteryFull
} from 'ionicons/icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonButton,
    IonIcon,
    IonInput
  ]
})
export class PerfilPage {

  nombre: string = 'Andrea López';
  correo: string = 'andrea@escuela.edu';
  edificio: string = 'B';
  salon: string = '204';

  constructor(
    private alertController: AlertController,
    private toastController: ToastController
  ) {
    addIcons({
      menuOutline,
      cartOutline,
      personOutline,
      mailOutline,
      cellular,
      wifi,
      batteryFull
    });

    this.cargarDatos();
  }

  cargarDatos() {
    const datos = localStorage.getItem('perfilUsuario');

    if (datos) {
      try {
        const perfil = JSON.parse(datos);

        this.nombre = perfil.nombre ?? this.nombre;
        this.correo = perfil.correo ?? this.correo;
        this.edificio = perfil.edificio ?? this.edificio;
        this.salon = perfil.salon ?? this.salon;
      } catch {
        console.warn('No se pudieron cargar los datos');
      }
    }
  }

  async guardarCambios() {

    if (!this.nombre.trim() || !this.correo.trim()) {
      const alerta = await this.alertController.create({
        header: 'Campos obligatorios',
        message: 'Ingresa tu nombre y correo electrónico.',
        buttons: ['Aceptar']
      });

      await alerta.present();
      return;
    }

    const datos = {
      nombre: this.nombre,
      correo: this.correo,
      edificio: this.edificio,
      salon: this.salon
    };

    localStorage.setItem(
      'perfilUsuario',
      JSON.stringify(datos)
    );

    const toast = await this.toastController.create({
      message: 'Cambios guardados correctamente',
      duration: 2000,
      color: 'success',
      position: 'bottom'
    });

    await toast.present();
  }

  async cambiarPassword() {

    const alerta = await this.alertController.create({
      header: 'Cambiar contraseña',
      message: 'Ingresa tu nueva contraseña.',
      inputs: [
        {
          name: 'password',
          type: 'password',
          placeholder: 'Nueva contraseña'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Continuar',
          handler: (datos) => {
            if (!datos.password ||
                datos.password.length < 8) {
              return false;
            }

            // Aquí se conectará el servicio de
            // autenticación para actualizarla.
            return true;
          }
        }
      ]
    });

    await alerta.present();
  }
}
