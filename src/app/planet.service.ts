import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http:HttpClient) { }
  fetchPlanets():Observable<Object>{
    return this.http.get('https://assignment-machstatz.herokuapp.com/planet')
  }
}
