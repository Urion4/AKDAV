import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, 
  IonToolbar,IonBackButton, IonButtons,
  IonList, IonItem, IonInput, 
  IonButton,IonIcon
} from '@ionic/angular';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { 
  lockClosedOutline, mailOutline, personCircleOutline 
} from 'ionicons/icons';
addIcons({ personCircleOutline, mailOutline, lockClosedOutline });
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  imports: [
    IonContent, 
    IonHeader, IonTitle, 
    IonToolbar, IonBackButton, 
    IonButtons, IonList, 
    IonItem, IonInput, 
    IonButton, IonIcon, CommonModule, 
    FormsModule
  ]
})
export class RegisterPage implements OnInit {

  constructor(private router: Router) {}
irLogin() {
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
