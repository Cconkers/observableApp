import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina404Component } from './pagina404/pagina404.component';
import { InicioComponent } from './vistas/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
   component: InicioComponent
  },
  {
    path: 'vistas',
    loadChildren: () => import('./vistas/vistas.module').then((m) => m.InicioModule),
  },
  {
    path: '404',
    component: Pagina404Component,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
