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
  public url2:string ="server/file/sim/form1-30-101-2023-23-36.txt"
  getServices():Observable<Garage []>{
    
    return this._http.get<Garage[]>(this.url2);
     }
}
