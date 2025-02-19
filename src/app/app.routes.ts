import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'coche',
    loadComponent: () => import('./coche/coche.page').then( m => m.CochePage)
  },
  {
    path: 'buscar',
    loadComponent: () => import('./buscar/buscar.page').then( m => m.BuscarPage)
  },
  
];
