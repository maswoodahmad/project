import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './garage.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }
  
  public url:string ="assets/emp/employee.json";
  getEmployee():Observable<Employee []>{
    
    return this._http.get<Employee[]>(this.url);
     


  }

  
}
