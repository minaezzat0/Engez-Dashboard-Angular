import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService
{
  private httpOptians = {};
  constructor(private httpClient: HttpClient) {
    this.httpOptians = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        //'Authorization':'Access-token'
      })
    }
  }
  getUsers(): Observable<User[]>
  {
    return this.httpClient.get<User[]>(`${environment.API_BASE_URL}/ordinaryusers`);
  }

  getAllFreelancers(): Observable<User[]>
  {
    return this.httpClient.get<User[]>(`${environment.API_BASE_URL}/freelancers`);
  }

  getUserByID(UserId: number): Observable<User>
  {
    return this.httpClient.get<User>(`${environment.API_BASE_URL}/users/${UserId}`);
  }

  addUser(NewUser: User): Observable<User>
  {
    return this.httpClient.post<User>(`${environment.API_BASE_URL}/register`,
      JSON.stringify(NewUser), this.httpOptians);
  }

  updateUser(NewUser: User): Observable<User>
  {
    return this.httpClient.post<User>(`${environment.API_BASE_URL}/users/${NewUser.id}`, JSON.stringify(NewUser), this.httpOptians)
  }

  deleteUser(UserId: number): Observable<{}>
  {
    const url = `${environment.API_BASE_URL}/users/${UserId}`;
    return this.httpClient.delete(`${environment.API_BASE_URL}/users/${UserId}`, this.httpOptians)
  }
}
