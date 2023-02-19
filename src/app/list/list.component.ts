import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { GdpDataService } from '../gdp-data.service';
import { Gdp } from '../models/gdp.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  cols: any[] = [];
  tableData: Gdp[] = [];
  loading: boolean = true;

  constructor(private GdpDataService: GdpDataService) { }

  ngOnInit(): void {
    this.GdpDataService.getData().subscribe({
      next: (data) => { 
        this.tableData = data;
        this.loading = false;
      },
      error: (e) => console.log('Error: ', e),
    });

    this.cols = [
      { field: 'countryName', header: 'Country Name' },
      { field: 'countryCode', header: 'Country Code' },      
      { field: 'year', header: 'Year' },
      { field: 'value', header: 'Value' }  
    ];
  }

  applyFilterGlobal($event: any, stringVal: string) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
