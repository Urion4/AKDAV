
import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  cartOutline,
  checkmarkCircleOutline,
  restaurantOutline,
  cubeOutline,
  cube,
  flagOutline,
  informationCircleOutline
} from 'ionicons/icons';
import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonIcon, } from '@ionic/angular';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguir.page.html',
  styleUrls: ['./seguir.page.scss'],
  standalone: true,
  imports: [IonIcon,IonCard,IonCardContent,IonButton,IonContent]
})
export class SeguirPage {

  constructor() {
    addIcons({
      arrowBackOutline,
      cartOutline,
      checkmarkCircleOutline,
      restaurantOutline,
      cubeOutline,
      cube,
      flagOutline,
      informationCircleOutline
    });
  }

}
