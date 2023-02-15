import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://pkgstore.datahub.io/90998f7f90e086bd5fc7c9075dfda43b/gdp/1/gdp_json/data/f11cb8c477556e91ca01e19619af0beb/gdp_json.json');
  }
}
