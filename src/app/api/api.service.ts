import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Garage from '../garage.model';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getMessage():Observable<any>{
 const val= this.http.get('http://localhost:3000/api/message');
 console.log(val);
 return val;

  }

  addData(data: any):Observable<any >{

    const json = JSON.stringify(data, null,2);
   
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Garage[]>( 'http://localhost:3000/api/form', json,{headers}  ).pipe(

    catchError(this.handleError)
    );




  }




  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(`Backend returned code ${error.status}, body was:`, error.error);
    }

    // Return an observable with a user-facing error message.
    return throwError('Something went wrong; please try again later.');
  }

  // addHero(hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('addHero', hero))
  //     );
  // }


}
