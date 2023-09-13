import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LkComponent } from './pages/lk/lk.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'lk',
    component: LkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
