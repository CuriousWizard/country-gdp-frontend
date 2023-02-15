import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    // Enable ripple effect for all components
    this.primengConfig.ripple = true;
  }

  title = 'country-gdp-frontend';
}
