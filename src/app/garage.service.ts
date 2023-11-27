import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import Garage from './garage.model';
@Injectable({
  providedIn: 'root'
})
export class GarageService {

 constructor(private _http: HttpClient) { }
  
  public url:string ="assets/emp/services.json";
  getServices():Observable<Garage []>{
    
    return this._http.get<Garage[]>(this.url);
     }
}
