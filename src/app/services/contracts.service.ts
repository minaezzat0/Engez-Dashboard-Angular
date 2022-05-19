import { Contract } from './../models/contract';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {
  private httpOptians = {};
  constructor(private httpClient: HttpClient) {
    this.httpOptians = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        //'Authorization':'Access-token'
      })
    }
}

  getAllContracts(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(`${environment.API_BASE_URL}/contracts`);
  }


  getContractByJobID(jobID: number): Observable<Contract> {
    return this.httpClient.get<Contract>(`${environment.API_BASE_URL}/contracts/${jobID}`);
  }

  addContract(NewContract: Contract): Observable<Contract> {
    return this.httpClient.post<Contract>(`${environment.API_BASE_URL}/contracts/`,
      JSON.stringify(NewContract), this.httpOptians);
  }

}

