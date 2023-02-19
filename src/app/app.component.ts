import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  items: MenuItem[] = [];

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    // Enable ripple effect for all components
    this.primengConfig.ripple = true;

    this.items = [
      {
          label:'List',
          icon: PrimeIcons.LIST,
          routerLink: ['/list']
      }
    ];
  }
}
