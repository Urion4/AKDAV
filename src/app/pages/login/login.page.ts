import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, 
  IonTitle, IonToolbar ,
  IonButton, IonIcon, 
  IonItem, IonInput,
} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    IonContent, IonHeader, 
    IonTitle, IonToolbar, 
    IonButton, IonIcon, 
    IonItem, IonInput, 
    CommonModule, 
    FormsModule
  ]
})
export class LoginPage implements OnInit {

  usuario: string = '';
  password: string = '';

  mostrarPassword: boolean = false;

  constructor(private router: Router) {}

  iniciarSesion() {
   if (!this.usuario || !this.password) {
    console.log('Debes ingresar usuario y contraseña');
    return;
  }

  this.router.navigateByUrl('/home', {
    replaceUrl: true
    });
  }

  irARegistro() {
    this.router.navigateByUrl('/register');
  }

  ngOnInit() {
  }

}

