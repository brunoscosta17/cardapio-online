import { Component, OnInit } from '@angular/core';

import {
  faHamburger,
  faPizzaSlice,
  faDrumstickBite,
  faBacon,
  faCocktail,
  faIceCream,
  faMinus,
  faPlus,
  faShoppingBag,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  faMinus = faMinus;
  faPlus = faPlus;
  faShoppingBag = faShoppingBag;

  menuItems: Array<any> = [
    { icon: faHamburger, text: 'Burgers', active: true },
    { icon: faPizzaSlice, text: 'Pizzas' },
    { icon: faDrumstickBite, text: 'Churrasco' },
    { icon: faBacon, text: 'Steaks' },
    { icon: faCocktail, text: 'Bebidas' },
    { icon: faIceCream, text: 'Sobremesas' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  handleService(event: any): void {
    console.log(event)
    this.menuItems.forEach((item, index) => {
      item.active = false
      if (item.text === event.text) {
        this.menuItems[index].active = true;
      }
    });
  }

}
