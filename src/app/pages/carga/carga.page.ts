import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent} from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.page.html',
  styleUrls: ['./carga.page.scss'],
  imports: [IonContent, CommonModule, FormsModule]
})
export class CargaPage implements OnInit {
private subscription?: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    this.subscription = timer(6500).subscribe(() => {
      this.router.navigateByUrl('/login', {
        replaceUrl: true
      });
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }


}
