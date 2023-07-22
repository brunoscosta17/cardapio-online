import { Component, OnInit } from '@angular/core';

import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  faPhoneFlip = faPhoneFlip;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faWhatsapp = faWhatsapp;

  constructor() { }

  ngOnInit(): void {
  }

}
