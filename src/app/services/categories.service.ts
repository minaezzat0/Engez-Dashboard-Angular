import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private httpOptians = {};
  constructor(private httpClient: HttpClient) {
    this.httpOptians = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        //'Authorization':'Access-token'
      })
    }
  }

  getCategories(): Observable<Category[]>
  {
    return this.httpClient.get<Category[]>(`${environment.API_BASE_URL}/categories`);
  }
  getCatByID(catID: number): Observable<Category>
  {
    return this.httpClient.get<Category>(`${environment.API_BASE_URL}/categories/${catID}`);
  }
  deleteCat(catID: number): Observable<{}>
  {
    const url = `${environment.API_BASE_URL}/job_categories/${catID}`;
    return this.httpClient.delete(`${environment.API_BASE_URL}/categories/${catID}`, this.httpOptians)
  }
}
