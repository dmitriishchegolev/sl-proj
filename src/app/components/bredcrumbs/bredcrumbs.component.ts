import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
} from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-bredcrumbs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './bredcrumbs.component.html',
  styleUrls: ['./bredcrumbs.component.scss'],
})
export class BredcrumbsComponent {
  public breadcrumbs: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = [];
        console.log(this.activatedRoute);
        this.formBreadCrumbs(this.activatedRoute.children);
      });
  }

  private formBreadCrumbs(childrens: ActivatedRoute[], path: string = '') {
    childrens.forEach((routes: ActivatedRoute) => {
      if (routes.routeConfig && routes.routeConfig.title) {
        let label = routes.routeConfig.title;
        if (routes.snapshot.data['breadcrumbsLabel']) {
          label = routes.snapshot.data['breadcrumbsLabel'];
        } else if (routes.snapshot.params && routes.snapshot.params['id']) {
          path += `/${routes.snapshot.params['id']}`;
          label += ` ${routes.snapshot.params['id']}`;
        } else {
          path += `/${routes.routeConfig.path}`;
        }
        this.breadcrumbs.push({
          label,
          routerUrl: path,
        });
      }
      if (routes.children.length) {
        this.formBreadCrumbs(routes.children, path);
      } else {
        console.log(this.breadcrumbs);
      }
    });
  }
}
