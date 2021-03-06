import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class CorrentistaService {
  constructor(private http: HttpClient) { }
  
  create(correntista:any): Observable<any> {
    return this.http.post(`${baseUrl}/correntista`,correntista);
  }

  list(): Observable<any> {
    return this.http.get(`${baseUrl}/correntista`);
  }
}