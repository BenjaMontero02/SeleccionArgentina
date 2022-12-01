import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plantel } from '../plantel/plantel';

const URL = 'https://637d42fb9c2635df8f84bb93.mockapi.io/plantel/Plantel';
@Injectable({
  providedIn: 'root'
})
export class PlantelDataService {

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Plantel[]>{
    return this.http.get<Plantel[]>(URL);
  }

  public getById(id: number): Observable<Plantel>{
    return this.http.get<Plantel>(`${URL}/${id}`);
  }
}
