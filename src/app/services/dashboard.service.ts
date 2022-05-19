import { Dashboard } from '../models/dashboard';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';
import { Job } from '../models/job';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private httpOptians = {};
  constructor(private httpClient: HttpClient) {
    this.httpOptians = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        //'Authorization':'Access-token'
      })
    }
  }

  dash(): Observable<Dashboard>
  {
    return this.httpClient.get<Dashboard>(`${environment.API_BASE_URL}/dashboard`);
  }

  getLatestJobs(): Observable<Job[]> {
    return this.httpClient.get<Job[]>(`${environment.API_BASE_URL}/latestfivejobs`);
  }

}
