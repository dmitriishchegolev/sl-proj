import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Главная',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./app/pages/main/main.component').then(
            (c) => c.MainComponent
          ),
      },
      {
        path: 'lk',
        title: 'Личный кабинет',
        loadComponent: () =>
          import('./app/pages/lk/lk.component').then((c) => c.LkComponent),
      },
      {
        path: 'ads',
        title: 'Объявления',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./app/pages/ads/list/list.component').then(
                (c) => c.ListComponent
              ),
          },
          {
            path: ':id',
            title: 'Карточка',
            children: [
              {
                path: '',
                loadComponent: () =>
                  import('./app/pages/ads/card/card.component').then(
                    (c) => c.CardComponent
                  ),
              },
              {
                path: ':id',
                title: 'Гуид',
                loadComponent: () =>
                  import('./app/pages/ads/card-edit/card-edit.component').then(
                    (c) => c.CardEditComponent
                  ),
              },
            ],
          },
        ],
      },
    ],
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
