
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
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

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.page.html',
  styleUrls: ['./seguimiento.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class SeguimientoPage {

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
