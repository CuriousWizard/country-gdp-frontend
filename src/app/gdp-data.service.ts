import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Gdp } from './models/gdp.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class GdpDataService {
  private apiUrl: string = 'https://pkgstore.datahub.io/90998f7f90e086bd5fc7c9075dfda43b/gdp/1/gdp_json/data/f11cb8c477556e91ca01e19619af0beb/gdp_json.json'

  constructor(private http: HttpClient) { }

  getData(): Observable<Gdp[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data) => data.map((item) =>({
        id: uuidv4(),
        countryName: item['Country Name'],
        countryCode: item['Country Code'],
        year: item['Year'],
        value: item['Value']
      })))
    );
  }
}
