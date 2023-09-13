import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { LkComponent } from './pages/lk/lk.component';
import { ListComponent } from './pages/ads/list/list.component';
import { CardComponent } from './pages/ads/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LkComponent,
    ListComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
