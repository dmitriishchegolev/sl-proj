import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Routes,
  provideRouter,
} from '@angular/router';
import { AuthGuard } from './app/auth.guard';
import { inject } from '@angular/core';
import { UserService } from './app/user.service';
import { RegisterComponent } from './app/pages/register/register.component';

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
        path: 'register',
        canDeactivate: [
          (component: RegisterComponent) => {
            if (component.form.dirty) {
              return window.confirm('Вы уверены?');
            } else {
              return true;
            }
          },
        ],
        loadComponent: () =>
          import('./app/pages/register/register.component').then(
            (c) => c.RegisterComponent
          ),
      },
      {
        path: 'lk',
        title: 'Личный кабинет',
        canActivate: [
          (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
            inject(UserService).isLoggined(),
        ],
        loadComponent: () =>
          import('./app/pages/lk/lk.component').then((c) => c.LkComponent),
      },
      {
        path: 'ads',
        title: 'Объявления',
        children: [
          // {
          //   path: ':id',
          //   title: 'Карточка',
          //   children: [
          //     {
          //       path: '',
          //       loadComponent: () =>
          //         import('./app/pages/ads/card/card.component').then(
          //           (c) => c.CardComponent
          //         ),
          //     },
          //     {
          //       path: ':id',
          //       title: 'Гуид',
          //       loadComponent: () =>
          //         import('./app/pages/ads/card-edit/card-edit.component').then(
          //           (c) => c.CardEditComponent
          //         ),
          //     },
          //   ],
          // },
          {
            path: '',
            canActivateChild: [AuthGuard],
            loadComponent: () =>
              import('./app/pages/ads/list/list.component').then(
                (c) => c.ListComponent
              ),
            children: [
              {
                path: 'new',
                title: 'Новые',
                loadComponent: () =>
                  import('./app/pages/ads/list/new/new.component').then(
                    (c) => c.NewComponent
                  ),
              },
              {
                path: 'popular',
                title: 'Популярные',
                loadComponent: () =>
                  import('./app/pages/ads/list/popular/popular.component').then(
                    (c) => c.PopularComponent
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
