import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//mude para sua aplicação
const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {
  constructor(private http: HttpClient) { }
  
  list(): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacao`);
  }
  
  create(movimentacao:any): Observable<any> {
    return this.http.post(`${baseUrl}/movimentacao`,movimentacao);
  }

  findContaById(contaId: any): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacao/${contaId}`);
  }

}