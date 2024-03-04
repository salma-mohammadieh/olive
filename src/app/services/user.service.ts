import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from '../constants/constants';
import { User } from '../types/user.type';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = apiUrl; // to be replaced with import from constants

  // constructor(private http: HttpClient) {}

  //   login(): Observable<User> {
  login(): User {
    // return this.http.get<User>(this.apiUrl);
    return;
  }
}
