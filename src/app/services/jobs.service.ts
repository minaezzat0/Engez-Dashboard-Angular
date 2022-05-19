import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../models/job';
import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private httpOptians = {};
  constructor(private httpClient: HttpClient) {
    this.httpOptians = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        //'Authorization':'Access-token'
      })
    }
  }

  getAllJobs(): Observable<Job[]> {
    return this.httpClient.get<Job[]>(`${environment.API_BASE_URL}/jobs`);
  }

  getJobByID(jobID: number): Observable<Job> {
    return this.httpClient.get<Job>(`${environment.API_BASE_URL}/jobs/${jobID}`);
  }

  getJobsByUserID(userID: number): Observable<Job[]> {
    return this.httpClient.get<Job[]>(`${environment.API_BASE_URL}/jobuser/${userID}`);
  }

  addJob(NewJob: Job): Observable<Job> {
    return this.httpClient.post<Job>(`${environment.API_BASE_URL}/jobs/`,
      JSON.stringify(NewJob), this.httpOptians);
  }

  updateJob(NewJob: Job): Observable<Job> {
    return this.httpClient.put<Job>(`${environment.API_BASE_URL}/jobs/${NewJob.id}`, JSON.stringify(NewJob), this.httpOptians)

  }

  deleteJob(jobID: number): Observable<{}> {
    const url = `${environment.API_BASE_URL}/posts/${jobID}`;
    return this.httpClient.delete(`${environment.API_BASE_URL}/jobs/${jobID}`, this.httpOptians)
  }

}
