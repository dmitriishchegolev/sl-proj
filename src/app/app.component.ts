import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BredcrumbsComponent } from './components/bredcrumbs/bredcrumbs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, RouterLink, BredcrumbsComponent],
  standalone: true,
})
export class AppComponent {
  title = 'module-app';
}
