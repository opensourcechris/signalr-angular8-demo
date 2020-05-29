import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) { }

  addLog(log: string) {
    return this.httpClient.post('https://localhost:5001/api/test', JSON.stringify(log), { headers: this.headers });
  }
}
