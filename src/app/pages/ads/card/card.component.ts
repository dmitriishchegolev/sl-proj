import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  public id: Observable<string> = this.activatedRoute.params.pipe(
    map((r: any) => r.id)
  );
  public guid: Observable<string> = this.activatedRoute.queryParams.pipe(
    map((r: any) => r.guid)
  );
  public description: Observable<string> = this.activatedRoute.data.pipe(
    map((r: any) => r.description)
  );
  constructor(private activatedRoute: ActivatedRoute) {}
}
