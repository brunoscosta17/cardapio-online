import { Component, OnInit } from '@angular/core';

import { faShoppingBag, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faShoppingBag = faShoppingBag;

  constructor() { }

  ngOnInit(): void {
  }

  scrollToReservations(): void {
    alert('Reservas')
  }

  scrollToServices(): void {
    alert('Serviços')
  }

  scrollToMenu(): void {
    alert('Cardápio')
  }

  scrollToTestimonials(): void {
    alert('Depoimentos')
  }

}
