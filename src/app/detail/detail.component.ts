import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GdpDataService } from '../gdp-data.service';
import { Gdp } from '../models/gdp.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  countryGdpData: Gdp[] = [];
  selectedCountry: Gdp | undefined;
  year: string = '';
  chartData: any;

  constructor(
    private route: ActivatedRoute,
    private gdpDataService: GdpDataService
  ) {}

  ngOnInit() {
    const countryCode = this.route.snapshot.paramMap.get('countryCode');
    this.year = this.route.snapshot.paramMap.get('year');
    this.gdpDataService.getData().subscribe(data => {
      this.countryGdpData = data.filter(d => d.countryCode === countryCode);
      this.selectedCountry = this.countryGdpData.find(d => d.year === this.year);
      this.chartData = this.generateChartData(this.countryGdpData);
    });
  }  

  generateChartData(gdpData: Gdp[]): any {
    const labels = gdpData.map(d => d.year.slice(0, 4));
    const datasets = [
      {
        label: 'GDP',
        data: gdpData.map(d => d.year !== this.year ? d.value : null),
        backgroundColor: '#42A5F5',
      },
      {
        label: 'Selected GDP',
        data: gdpData.map(d => d.year === this.year ? d.value : null),
        backgroundColor: '#FFA726',
      },
    ];
    return { labels, datasets };
  }

}
