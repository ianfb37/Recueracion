import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AgilityService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getGuias(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
