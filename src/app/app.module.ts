import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BannerComponent } from './components/landing-page/banner/banner.component';
import { MenuComponent } from './components/landing-page/menu/menu.component';
import { ServicesComponent } from './components/landing-page/services/services.component';
import { TestimonialsComponent } from './components/landing-page/testimonials/testimonials.component';
import { ReservationsComponent } from './components/landing-page/reservations/reservations.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    BannerComponent,
    MenuComponent,
    ServicesComponent,
    TestimonialsComponent,
    ReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
