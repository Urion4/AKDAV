import { ConfigPage } from './../../option/config/config.page';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader,
  IonTitle, IonToolbar,
  IonMenu,IonIcon,IonList,
  IonMenuToggle,IonItem,IonLabel,
  IonButton,IonCard,IonCardContent,
  IonButtons,IonMenuButton,IonSearchbar
 } from '@ionic/angular';
 import { addIcons } from 'ionicons';
 import {
  restaurantOutline,cartOutline,homeOutline,
  personOutline,settingsOutline,receiptOutline,
  logOutOutline,addOutline} from 'ionicons/icons';
import { Router } from '@angular/router';

addIcons({
  restaurantOutline,
  cartOutline,
  homeOutline,
  personOutline,
  settingsOutline,
  receiptOutline,
  logOutOutline,
  addOutline
});

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    IonContent, IonHeader,
    IonTitle, IonToolbar,
    CommonModule, FormsModule,
    IonMenu,IonIcon,IonList,
    IonMenuToggle,IonItem,IonLabel,
    IonButton,IonCard,IonCardContent,
    IonButtons,IonMenuButton,IonSearchbar
  ]
})
export class HomePage implements OnInit {

  constructor(private router: Router) {
    addIcons({
      restaurantOutline,
      cartOutline,
      homeOutline,
      personOutline,
      settingsOutline,
      receiptOutline,
      logOutOutline,
      addOutline
    });
  }
  cerrarSesion() {
    this.router.navigateByUrl('/login', {
      replaceUrl: true
    });
  }
  configuracion(){
        this.router.navigateByUrl('/config', {
      replaceUrl: true
    });
  }

  ngOnInit() {
  }

}


