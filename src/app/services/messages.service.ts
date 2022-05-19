import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private httpOptians = {};
  constructor(private httpClient: HttpClient) {
    this.httpOptians = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        //'Authorization':'Access-token'
      })
    }
  }

getAllMessages(): Observable<Message[]> {
  return this.httpClient.get<Message[]>(`${environment.API_BASE_URL}/contacts`);
}


addMessage(NewMessage: Message): Observable<Message> {
  return this.httpClient.post<Message>(`${environment.API_BASE_URL}/contacts`,
    JSON.stringify(NewMessage), this.httpOptians);
}


deleteMessage(MessageId: number): Observable<{}> {
 // const url = `${environment.API_BASE_URL}/contacts/${MessageId}`;
  return this.httpClient.delete(`${environment.API_BASE_URL}/owncontacts/${MessageId}`, this.httpOptians)

}

}
