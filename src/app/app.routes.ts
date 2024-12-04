import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'olvide-pass',
    loadComponent: () => import('./olvide-pass/olvide-pass.page').then( m => m.OlvidePassPage)
  },
  {
    path: 'home-estudiante',
    loadComponent: () => import('./home-estudiante/home-estudiante.page').then( m => m.HomeEstudiantePage)
  },
  {
    path: 'registrar-asistencia',
    loadComponent: () => import('./registrar-asistencia/registrar-asistencia.page').then( m => m.RegistrarAsistenciaPage)
  },
  {
    path: 'asistencia-seccion',
    loadComponent: () => import('./asistencia-seccion/asistencia-seccion.page').then( m => m.AsistenciaSeccionPage)
  },
  {
    path: 'generar-qr',
    loadComponent: () => import('./generar-qr/generar-qr.page').then( m => m.GenerarQrPage)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then( m => m.TabsPage)
  
    ,children: [
      {
        path: 'admin',
        loadComponent: () => import('./admin/admin.page').then( m => m.AdminPage)
      },
      {
        path: 'adminseccion',
        loadComponent: () => import('./adminseccion/adminseccion.page').then( m => m.AdminseccionPage)
      },
    ]
  
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then( m => m.RegistroPage)
  },

];
