import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AuthGuard from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    title: 'Главная',
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'lk',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/lk/lk.module').then((m) => m.LkModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/ads/list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'ads',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/ads/list/list.module').then((m) => m.ListModule),
      },
      {
        path: ':id',
        loadChildren: () =>
          import('./pages/ads/card/card.module').then((m) => m.CardModule),
        data: {
          description: 'Карточка чего-то там',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
