import { Component, OnInit } from '@angular/core';

import { faStar, faStarHalfAlt, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  faStar = faStar;
  faStarHalfAlt = faStarHalfAlt;
  faQuoteLeft = faQuoteLeft;
  faQuoteRight = faQuoteRight;
  farStar = farStar;

  constructor() { }

  ngOnInit(): void {
  }

}
