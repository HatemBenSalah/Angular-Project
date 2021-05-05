import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getUserbyId(user)  : Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post('/UserController/getUser',user,{headers: headers,responseType: 'json'}).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }


  private handleError(error: any) { return observableThrowError(error); }
  private extractData(res) {
    console.log(res)
    let body = res;
    return body || {};
  }

  
  updateUser(user ): Observable<Object> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    
      return this.http.post('/UserController/updateUser',user,{headers: headers,responseType: 'json'}).pipe(
        map(this.extractData),
        catchError(this.handleError));
    }
  }

 


