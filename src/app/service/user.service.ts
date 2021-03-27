import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Response, ResponseContentType, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getUser(){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get('/UserController/getUser',{headers: headers,responseType: 'json'}).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  private handleError(error: any) { return observableThrowError(error); }
  private extractData(res) {
    console.log(res)
    let body = res;
    return body || {};
  }

  createUser(user: Object){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post('/UserController/createUser',user,{headers: headers,responseType: 'json'}).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  updateUser(user): Observable<Object> {
    return this.http.post('/UserController/updateUser',user).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  deleteUser(id: number) {
    return this.http.post('/UserController/deleteUser',id).pipe(
      map(this.extractData),
    
      catchError(this.handleError));
   
  }

}
