import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonContent, IonHeader, IonToolbar, IonTitle, IonIcon, IonButton, 
  IonItem, IonLabel, IonTextarea, IonNote, IonGrid, IonRow, IonCol, IonText 
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowBack, cartOutline, checkmarkCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.page.html',
  styleUrls: ['./encuesta.page.scss'],
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    IonContent, IonHeader, IonToolbar, IonTitle, IonIcon, IonButton, 
    IonItem, IonLabel, IonTextarea, IonNote, IonGrid, IonRow, IonCol, IonText
  ]
})
export class EncuestaPage implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  encuestaForm!: FormGroup;

  // Opciones para las preguntas
  opcionesFacilidad = ['Difícil', 'Regular', 'Fácil'];
  opcionesVelocidad = ['Lenta', 'Normal', 'Rápida'];
  opcionesSatisfaccion = [1, 2, 3, 4, 5];

  constructor() {
    // Registrar iconos
    addIcons({ arrowBack, cartOutline, checkmarkCircleOutline });
  }

  ngOnInit() {
    this.encuestaForm = this.fb.group({
      facilidad: ['', Validators.required],
      velocidad: ['', Validators.required],
      satisfaccion: [null, Validators.required],
      mejora: ['']
    });
  }

  // Método para seleccionar opciones
  seleccionar(campo: string, valor: any) {
    this.encuestaForm.get(campo)?.setValue(valor);
  }

  enviarOpinion() {
    if (this.encuestaForm.valid) {
      console.log('Datos enviados:', this.encuestaForm.value);
      // Aquí iría la llamada al servicio backend
      this.router.navigate(['/gracias']);
    } else {
      this.encuestaForm.markAllAsTouched();
    }
  }

  omitir() {
    this.router.navigate(['/home']);
  }
}