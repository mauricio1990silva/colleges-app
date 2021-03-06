import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Book } from '../models/book';
import { School, SchoolCard } from '../model/school.model';
import { objToSearchParams } from '../shared/helpers';
// import { deserialize } from 'json-typescript-mapper';
import { JsonConvert } from 'json2typescript';

@Injectable()
export class SchoolService {
  private API_PATH = 'https://api.data.gov/ed/collegescorecard/v1/schools';
  private jsonConvert: JsonConvert = new JsonConvert();

  constructor(private http: Http) {}

  searchSchools(queryParams: any): Observable<SchoolCard[]> {
    return this.http.get(`${this.API_PATH}`, {search: objToSearchParams(queryParams)})
      .map(res => {
        const parsedSchool: School = this.jsonConvert.deserialize(res.json(), School);
        return parsedSchool.results;
      });
  }

  search(queryParams: any): Observable<SchoolCard[]> {
    return this.http.get(`${this.API_PATH}`, {search: objToSearchParams(queryParams)})
      .map(res => {
        const parsedSchool: School = this.jsonConvert.deserialize(res.json(), School);
        return parsedSchool.results;
      }).delay(1000);
  }

  retrieveSchool(volumeId: string): Observable<School> {
    return this.http.get(`${this.API_PATH}/${volumeId}`)
      .map(res => res.json());
  }
}
