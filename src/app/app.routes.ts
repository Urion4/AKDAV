import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'carga',
    pathMatch: 'full',
  },
  {
    path: 'carga',
    loadComponent: () => import('./pages/carga/carga.page').then( m => m.CargaPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'config',
    loadComponent: () => import('./option/config/config.page').then( m => m.ConfigPage)
  },
  {
    path: 'mis-pedidos',
    loadComponent: () => import('./option/mis-pedidos/mis-pedidos.page').then( m => m.MisPedidosPage)
  },
];
