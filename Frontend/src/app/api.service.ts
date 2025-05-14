import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'; // <--- Add this line
@Injectable (
  {
    providedIn: 'root'
  }
)
export class ApiService {
  constructor(private http: HttpClient) {

  }

  getPosts(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/posts`);
  }
}
