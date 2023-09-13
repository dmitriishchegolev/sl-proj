import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'module-app';

  constructor(private router: Router) {}

  goToCard() {
    this.router.navigateByUrl('/ads/123?guid=asdasda2-asdas24');
  }
}
